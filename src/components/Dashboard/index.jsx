// index.jsx
import React, { useState, useEffect, useCallback } from 'react';
import useManageUserDocument from '../../hooks/useManageUserDocument'; // Adjust path as necessary

import Swal from 'sweetalert2';

import { collection, query, where, getDocs, doc, deleteDoc, orderBy } from "firebase/firestore";
import { db } from '../../config/firestore';

import Header from './Header';
import NotebookTable from './NotebookTable';
import Add from './Add';
import Edit from './Edit';

const Dashboard = () => {
  const { userDetails, loading } = useManageUserDocument();
  const [designs, setDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleReturnToDashboard = () => {
    setIsEditing(false);
    setSelectedDesign(null); // Optionally reset selected design
    getDesigns(); // Refresh designs if needed
  };

  const getDesigns = useCallback(async () => {
    let designsQuery;
    if (userDetails && userDetails.isAdmin) {
      designsQuery = query(collection(db, "designs"), orderBy("dateCreated", "desc"));
    } else if (userDetails) {
      designsQuery = query(collection(db, "designs"), where("userId", "==", userDetails.uid), orderBy("dateCreated", "desc"));
    }

    const querySnapshot = await getDocs(designsQuery);
    const designs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setDesigns(designs);
  }, [userDetails]); 

  useEffect(() => {
    if (!loading && userDetails) {
      getDesigns();
    }
  }, [userDetails, loading, getDesigns]);  

  const handleEdit = id => {
    const [design] = designs.filter(design => design.id === id);

    setSelectedDesign(design);
    setIsEditing(true);
  };

  const handleDelete = async (designId) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Query for builds associated with the design
          const buildsQuery = query(collection(db, "builds"), where("design_ID", "==", designId));
          const buildsSnapshot = await getDocs(buildsQuery);
  
          for (const buildDoc of buildsSnapshot.docs) {
            const buildId = buildDoc.id;
  
            // Query for tests associated with each build
            const testsQuery = query(collection(db, "tests"), where("build_ID", "==", buildId));
            const testsSnapshot = await getDocs(testsQuery);
  
            // Delete each test
            for (const testDoc of testsSnapshot.docs) {
              await deleteDoc(doc(db, "tests", testDoc.id));
            }
  
            // After deleting tests, delete the build
            await deleteDoc(doc(db, "builds", buildId));
          }
  
          // After deleting builds and their tests, delete the design
          await deleteDoc(doc(db, "designs", designId));
  
          // Update UI
          const updatedDesigns = designs.filter(design => design.id !== designId);
          setDesigns(updatedDesigns);
  
          Swal.fire('Deleted!', 'Your design and its associated builds and tests have been deleted.', 'success');
        } catch (error) {
          console.error("Error deleting design, builds, and tests: ", error);
          Swal.fire('Failed!', 'There was an issue deleting your design and its associated builds and tests.', 'error');
        }
      }
    });
  };  

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
          />
          <NotebookTable
            designs={designs}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          designs={designs}
          setDesigns={setDesigns}
          setIsAdding={setIsAdding}
          getDesigns={getDesigns}
        />
      )}
      {isEditing && (
        <Edit
          designs={designs}
          selectedDesign={selectedDesign}
          setDesigns={setDesigns}
          setIsEditing={setIsEditing}
          getDesigns={getDesigns}
          onReturnToDashboard={handleReturnToDashboard}
        />
      )}
    </div>
  );
};

export default Dashboard;

