import React, { useState } from 'react';

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../../config/firestore';

import useManageUserDocument from '../../hooks/useManageUserDocument'; // Adjust the import path as necessary

import Swal from 'sweetalert2';

const AddTest = ({ designId, buildId, refreshTests, setAddingTestIdForBuild }) => { 
  const [testDescription, setTestDescription] = useState('');
  const [testResults, setTestResults] = useState('');
  const [testConclusions, setTestConclusions] = useState('');
  const { userDetails } = useManageUserDocument();

  const handleAddTest = async () => {
    if (!testDescription) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Test description cannot be empty!',
      });
      return;
    }

    try {
      await addDoc(collection(db, "tests"), {
        build_ID: buildId,
        design_ID: designId,
        dateCreated: serverTimestamp(), 
        description: testDescription,
        results: testResults,
        conclusions: testConclusions,
        userId: userDetails.uid,
      });

      refreshTests(buildId); // Call to refresh the list of tests in the UI
      setTestDescription('');
      setTestResults('');
      setTestConclusions('');
      setAddingTestIdForBuild(null); // Reset the state to hide the input form
      Swal.fire('Success', 'Test added successfully', 'success');
    } catch (error) {
      console.error("Error adding test: ", error);
      Swal.fire('Error', 'Failed to add the test', 'error');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Describe the test"
        value={testDescription}
        onChange={(e) => setTestDescription(e.target.value)}
        rows="4" // Adjust rows as needed
        style={{ width: '100%' }} // Adjust width as needed
      ></textarea>
      <textarea
        placeholder="Test Results"
        value={testResults}
        onChange={(e) => setTestResults(e.target.value)}
        rows="4"
        style={{ width: '100%', margin: '10px 0' }}
      ></textarea>
      <textarea
        placeholder="Test Conclusions"
        value={testConclusions}
        onChange={(e) => setTestConclusions(e.target.value)}
        rows="4"
        style={{ width: '100%', margin: '10px 0' }}
      ></textarea>
      <div className="flex-space-between">
        <button onClick={handleAddTest} className="button muted-button">Save</button>
        <button onClick={() => setAddingTestIdForBuild(null)} className="button muted-button">Cancel</button> 
      </div>
    </div>
  );
};

export default AddTest;
