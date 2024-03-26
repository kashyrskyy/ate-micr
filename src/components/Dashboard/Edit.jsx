// Edit.jsx
import React, { useState, useEffect, useRef } from 'react';
import useManageUserDocument from '../../hooks/useManageUserDocument';

import { collection, query, where, getDocs, doc, setDoc, Timestamp, orderBy, getDoc } from "firebase/firestore";
import { db } from '../../config/firestore';

import AddBuild from './AddBuild';
import AddTest from './AddTest';
import ImageUpload from './ImageUpload';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';

const Edit = ({ selectedDesign, setIsEditing, getDesigns, onReturnToDashboard }) => {
  const { userDetails, loading } = useManageUserDocument();

  const id = selectedDesign.id;
  const [description, setDesignDescription] = useState(selectedDesign.description);
  const [date, setDate] = useState(selectedDesign.dateDue || '');
  const [title, setTitle] = useState('');

  const [isAddingBuild, setIsAddingBuild] = useState(false);
  const [builds, setBuilds] = useState([]);
  const [testsByBuildId, setTestsByBuildId] = useState({});
  const [addingTestIdForBuild, setAddingTestIdForBuild] = useState(null);

  const [editableBuildDescriptions, setEditableBuildDescriptions] = useState({});

  const [editableTestDescriptions, setEditableTestDescriptions] = useState({});
  const [editableTestResults, setEditableTestResults] = useState({});
  const [editableTestConclusions, setEditableTestConclusions] = useState({});

  const [imageUrl, setImageUrl] = useState('');
  const [imageStoragePath, setImageStoragePath] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  const [buildImages, setBuildImages] = useState({}); // { buildId: { imageUrl: '', imageStoragePath: '' } }
  const [testImages, setTestImages] = useState({}); // { testId: { imageUrl: '', imageStoragePath: '' } }

  const addBuildFormRef = useRef(null);
  const addTestFormRef = useRef(null);

  // State for handling Dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [dialogConfirmAction, setDialogConfirmAction] = useState(() => {});

  // State for Snackbar notifications
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info'); // 'success', 'error', etc.

  console.log('Editing Design by user:', userDetails);

  const handleBuildDescriptionChange = (buildId, value) => {
    setEditableBuildDescriptions(prev => ({ ...prev, [buildId]: value }));
  };
  
  const handleTestDescriptionChange = (testId, value) => {
    setEditableTestDescriptions(prev => ({ ...prev, [testId]: value }));
  };  
  
  const updateBuildDescription = async (buildId) => {
    const buildRef = doc(db, "builds", buildId);
    await setDoc(buildRef, { description: editableBuildDescriptions[buildId] }, { merge: true });
    refreshBuilds(); // Ensure this method updates local state to reflect changes
  }; 
  
  const updateTestDescription = async (testId, buildId) => { // Note: buildId is now a parameter
    // Prepare updateData object, omitting properties that are undefined
    const updateData = {};
    if (editableTestDescriptions[testId] !== undefined) {
      updateData.description = editableTestDescriptions[testId];
    }
    if (editableTestResults[testId] !== undefined) {
      updateData.results = editableTestResults[testId];
    }
    if (editableTestConclusions[testId] !== undefined) {
      updateData.conclusions = editableTestConclusions[testId];
    }

    // Proceed only if there's something to update
    if (Object.keys(updateData).length > 0) {
      const testRef = doc(db, "tests", testId);
      try {
        await setDoc(testRef, updateData, { merge: true });
        console.log(`Successfully updated test ID: ${testId}`);
        await refreshTestsForBuild(buildId); // Now refreshes only tests for the specific build
      } catch (error) {
        console.error(`Error updating test ID: ${testId}:`, error);
      }
    }
  };  

  const handleTestResultsChange = (testId, value) => {
    setEditableTestResults(prev => ({ ...prev, [testId]: value }));
  };
  
  const handleTestConclusionsChange = (testId, value) => {
    setEditableTestConclusions(prev => ({ ...prev, [testId]: value }));
  };

  // useEffect hook for initializing form fields
  useEffect(() => {
    if (selectedDesign) {
      setDesignDescription(selectedDesign.description || '');
      setTitle(selectedDesign.title || '');

      // Fetch image URL from Firestore
      const fetchImageUrl = async () => {
        const designRef = doc(db, "designs", id);
        const docSnap = await getDoc(designRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setImageUrl(data.imageUrl || '');
          setImageStoragePath(data.imageStoragePath || '');
          setImageTitle(data.imageTitle || ''); // Set image title
        }
      };

      fetchImageUrl();
  
      // Check if 'dateDue' exists and handle both string and Timestamp cases
      let dueDateString;
      if (selectedDesign.dateDue) {
        if (typeof selectedDesign.dateDue === 'string') {
          // If 'dateDue' is a string, use it directly
          dueDateString = selectedDesign.dateDue;
        } else if (selectedDesign.dateDue.toDate) {
          // If 'dateDue' is a Firestore Timestamp, convert to Date and format as string
          dueDateString = selectedDesign.dateDue.toDate().toISOString().split('T')[0];
        }
        setDate(dueDateString);
      } else {
        setDate(''); // If no 'dateDue', reset the date field
      }
    }
  }, [selectedDesign, id]); // Included 'id' in the dependency array
  
  // UseEffect to fetch tests for all builds initially and whenever builds are refreshed
  useEffect(() => {
    const fetchBuildsAndTests = async () => {
      if (!userDetails) return;

      const buildsQuery = query(collection(db, "builds"), where("design_ID", "==", id), where("userId", "==", userDetails.uid), orderBy("dateCreated"));
      const querySnapshot = await getDocs(buildsQuery);
      const fetchedBuilds = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      let tempBuildImages = {};
      let tempTestsByBuildId = {};
      let tempTestResults = {};
      let tempTestConclusions = {};
      let tempTestImages = {}; // Create an object to hold test images
      let tempTestDescriptions = {}; // Initialize temporary storage for test descriptions

      for (const build of fetchedBuilds) {
        // Set image data for each build
        tempBuildImages[build.id] = {
          imageUrl: build.imageUrl || '',
          imageStoragePath: build.imageStoragePath || '',
          imageTitle: build.imageTitle || ''
        };
        
        const testsQuery = query(collection(db, "tests"), where("build_ID", "==", build.id), where("userId", "==", userDetails.uid), orderBy("dateCreated"));
        const testsSnapshot = await getDocs(testsQuery);
        const fetchedTests = testsSnapshot.docs.map(doc => {
          const testData = doc.data();
          // Set image data for each test
          tempTestImages[doc.id] = {
            imageUrl: testData.imageUrl || '',
            imageStoragePath: testData.imageStoragePath || '',
            imageTitle: testData.imageTitle || ''
          };
          
          // Initialize editable fields for descriptions, results, and conclusions
          tempTestDescriptions[doc.id] = testData.description || "";
          tempTestResults[doc.id] = testData.results || "";
          tempTestConclusions[doc.id] = testData.conclusions || "";
          return { id: doc.id, ...testData };
        });
        tempTestsByBuildId[build.id] = fetchedTests;
      }
    
      // Update state with fetched data
      setBuilds(fetchedBuilds);
      setBuildImages(tempBuildImages); // Set the state for build images
      setTestsByBuildId(tempTestsByBuildId);
      setEditableTestDescriptions(tempTestDescriptions); 
      setEditableTestResults(tempTestResults);
      setEditableTestConclusions(tempTestConclusions);
      setTestImages(tempTestImages); // Set the state for test images
    };    
    
    if (!loading && userDetails) {
      fetchBuildsAndTests();
    }

  }, [loading, userDetails, selectedDesign.id, id]); // 'id' is included in the dependency array    

  // This function now focuses on refreshing builds only, with detailed console logging
  const refreshBuilds = async () => {
    if (!userDetails) {
      console.log("User details not loaded yet");
      return;
    }

    try {
      console.log("Refreshing builds for user UID:", userDetails?.uid);
      console.log("Selected design ID for query:", selectedDesign?.id);
      
      const buildsQuery = query(
        collection(db, "builds"),
        where("design_ID", "==", id),
        where("userId", "==", userDetails.uid), // Ensure this line is present and correct
        orderBy("dateCreated")
      );      
      console.log("Builds query details:", JSON.stringify(buildsQuery, null, 2)); // Detailed query logging

      const buildsSnapshot = await getDocs(buildsQuery);
      console.log("Builds snapshot details:", JSON.stringify(buildsSnapshot.docs.map(doc => doc.data()), null, 2)); // Detailed snapshot logging

      console.log("Builds query successful, number of builds fetched: ", buildsSnapshot.docs.length);
    
      const newBuilds = buildsSnapshot.docs.map(doc => {
        console.log("Build doc path: ", doc.ref.path); // Log each build document path for tracking
        return { id: doc.id, ...doc.data() };
      });
    
      setBuilds(newBuilds);
      console.log("New builds state after refresh:", newBuilds); // Confirming the refreshed state
    } catch (error) {
      console.error("Error refreshing builds:", error); // Detailed error logging
      if (error.code === 'permission-denied') {
        console.error("Permission denied when trying to refresh builds:", error);
      } else {
        console.error("An unexpected error occurred when trying to refresh builds:", error);
      }
    }
  }; 

  const refreshTestsForBuild = async (buildId) => {
    if (!userDetails) {
      console.log("User details not loaded yet");
      return;
    }
  
    const testsQuery = query(
      collection(db, "tests"),
      where("build_ID", "==", buildId),
      where("userId", "==", userDetails.uid), // Ensure the user can only access their tests
      orderBy("dateCreated")
    );
    const testsSnapshot = await getDocs(testsQuery);
    const fetchedTests = testsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  
    // Update tests for the specific build in state
    setTestsByBuildId(prev => ({
      ...prev,
      [buildId]: fetchedTests
    }));
  };  

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!description || !date) {
      setDialogContent('All fields are required.');
      setDialogOpen(true);
      return;
    }

    // Construct the update object dynamically
    let updateObject = {
        title,
        description,
        dateDue: Timestamp.fromDate(new Date(date)), // Convert string to Date, then to Firestore Timestamp
        imageUrl,
        imageStoragePath,
        imageTitle,
        userId: userDetails.uid
    };

    try {
      await setDoc(doc(db, "designs", id), updateObject, { merge: true });
      setSnackbarMessage('Your design has been updated.');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      // Delay further actions to allow snackbar to appear
      setTimeout(() => {
        setIsEditing(false); // Or navigate away
        getDesigns(); // Fetch the updated list of designs
      }, 1000); // Adjust time as needed
    } catch (error) {
      console.error("Error updating design:", error);

      setSnackbarMessage('There was an issue updating your design.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const updateBuildImageDetailsInFirestore = async (buildId, imageUrl, imageStoragePath, imageTitle) => {
    const buildRef = doc(db, "builds", buildId);
    const updateData = {
      ...(imageUrl !== undefined && { imageUrl }),
      ...(imageStoragePath !== undefined && { imageStoragePath }),
      ...(imageTitle !== undefined && { imageTitle })
    };
    
    if (Object.keys(updateData).length > 0) {
      await setDoc(buildRef, updateData, { merge: true });
    }
  };  

  const handleDesignImageDeleted = async () => {
    try {
      // Update the design document in Firestore to remove image references
      const designRef = doc(db, "designs", id);
      await setDoc(designRef, {
        imageUrl: '',
        imageStoragePath: '',
        imageTitle: ''
      }, { merge: true });

      // Update local state to reflect the deletion
      setImageUrl('');
      setImageStoragePath('');
      setImageTitle('');

      console.log("Design image references removed from Firestore.");
    } catch (error) {
      console.error("Failed to update design document in Firestore:", error);
    }
  };

  const handleDeleteBuildImage = async (buildId) => {
    const buildRef = doc(db, "builds", buildId);
    await setDoc(buildRef, { imageUrl: '', imageStoragePath: '', imageTitle: '' }, { merge: true });
  };
  
  const renderBuildImageUpload = (build) => (
    <ImageUpload
      path={`builds/${build.id}/images`}
      imageUrl={buildImages[build.id]?.imageUrl || ''}
      setImageUrl={(url) => {
        setBuildImages(prev => {
          const updatedBuildImages = {
            ...prev,
            [build.id]: { ...prev[build.id], imageUrl: url }
          };
          updateBuildImageDetailsInFirestore(build.id, url, updatedBuildImages[build.id].imageStoragePath, updatedBuildImages[build.id].imageTitle);
          return updatedBuildImages;
        });
      }}
      imageStoragePath={buildImages[build.id]?.imageStoragePath || ''}
      setImageStoragePath={(path) => {
        setBuildImages(prev => {
          const updatedBuildImages = {
            ...prev,
            [build.id]: { ...prev[build.id], imageStoragePath: path }
          };
          updateBuildImageDetailsInFirestore(build.id, updatedBuildImages[build.id].imageUrl, path, updatedBuildImages[build.id].imageTitle);
          return updatedBuildImages;
        });
      }}
      imageTitle={buildImages[build.id]?.imageTitle || ''}
      setImageTitle={(title) => {
        setBuildImages(prev => {
          const updatedBuildImages = {
            ...prev,
            [build.id]: { ...prev[build.id], imageTitle: title }
          };
          updateBuildImageDetailsInFirestore(build.id, updatedBuildImages[build.id].imageUrl, updatedBuildImages[build.id].imageStoragePath, title);
          return updatedBuildImages;
        });
      }}
      onDelete={() => handleDeleteBuildImage(build.id)}
    />
  );
  
  const handleDeleteTestImage = async (testId) => {
    const testRef = doc(db, "tests", testId);
    await setDoc(testRef, { imageUrl: '', imageStoragePath: '', imageTitle: '' }, { merge: true });
  };
  
  const renderTestImageUpload = (test) => {
    // Local function to handle the update to Firestore
    const handleUpdateTestImageDetails = async (testId, imageUrl, imageStoragePath, imageTitle) => {
      const updateObject = {};
      if (typeof imageUrl !== 'undefined') updateObject.imageUrl = imageUrl;
      if (typeof imageStoragePath !== 'undefined') updateObject.imageStoragePath = imageStoragePath;
      if (typeof imageTitle !== 'undefined') updateObject.imageTitle = imageTitle;
  
      if (Object.keys(updateObject).length === 0) {
        console.log('No data to update for testId:', testId);
        return;
      }
  
      const testRef = doc(db, "tests", testId);
      try {
        await setDoc(testRef, updateObject, { merge: true });
        console.log("Firestore updated successfully for testId:", testId);
      } catch (error) {
        console.error("Error updating Firestore for testId:", testId, error);
      }
    };
  
    return (
      <ImageUpload
        path={`tests/${test.id}/images`}
        imageUrl={testImages[test.id]?.imageUrl || ''}
        setImageUrl={(url) => {
          setTestImages(prev => ({
            ...prev,
            [test.id]: { ...prev[test.id], imageUrl: url }
          }));
          // Immediately call the update function after state update
          handleUpdateTestImageDetails(test.id, url, testImages[test.id]?.imageStoragePath, testImages[test.id]?.imageTitle);
        }}
        imageStoragePath={testImages[test.id]?.imageStoragePath || ''}
        setImageStoragePath={(path) => {
          setTestImages(prev => ({
            ...prev,
            [test.id]: { ...prev[test.id], imageStoragePath: path }
          }));
          handleUpdateTestImageDetails(test.id, testImages[test.id]?.imageUrl, path, testImages[test.id]?.imageTitle);
        }}
        imageTitle={testImages[test.id]?.imageTitle || ''}
        setImageTitle={(title) => {
          setTestImages(prev => ({
            ...prev,
            [test.id]: { ...prev[test.id], imageTitle: title }
          }));
          handleUpdateTestImageDetails(test.id, testImages[test.id]?.imageUrl, testImages[test.id]?.imageStoragePath, title);
        }}
        onDelete={() => handleDeleteTestImage(test.id)}
      />
    );
  };

  return (
    <div className="small-container">
      <button onClick={onReturnToDashboard} className="muted-button margin-top-20">← All Designs</button>
      <form onSubmit={handleUpdate}>
        <h1>Design Document</h1>
        <div style={{ marginBottom: '20px' }}>
        </div>
        <label htmlFor="title" style={{ textDecoration: 'underline' }}>Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description" style={{ textDecoration: 'underline' }}>Description</label>
        <ul>
            <li>Objective: What is the goal for this design?</li>
            <li>Rationale: Why is this new design being done?</li>
            <li>Selected Target: What is the target for the design being made?</li>
            <li>Functional Modification: What is being done to this target?</li>
            <li>Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?</li>
        </ul>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={e => setDesignDescription(e.target.value)}
          rows="10" // Adjust the number of rows to increase the size
          style={{ width: '100%' }} // Make the textarea full width
        ></textarea>
        {/* Example for adding an image to a Design */}
        <label htmlFor="file" style={{ textDecoration: 'underline' }}>Image</label>
        <ImageUpload 
          path={`designs/${id}`} 
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          imageStoragePath={imageStoragePath}
          setImageStoragePath={setImageStoragePath}
          imageTitle={imageTitle}
          setImageTitle={setImageTitle}
          onDelete={handleDesignImageDeleted}
        />
        <label htmlFor="dateDue" style={{ textDecoration: 'underline' }}>Due Date</label>
        <input
          id="dateDue"
          type="date"
          name="dateDue"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <button
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
      <div>
        <div className="flex-space-between">
          <h2>Builds</h2>
          <button 
            className="button muted-button"
            onClick={() => {
              setIsAddingBuild(true);
              // Use a setTimeout to ensure the DOM has been updated
              setTimeout(() => {
                if (addBuildFormRef.current) {
                  addBuildFormRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }} style={{ marginTop: '20px' }}> 
              <span role="img" aria-label="Add Build">➕</span> Build
          </button>
        </div>
        {builds.map((build, index) => (
          <div key={build.id} className="build-record">
            <div className="flex-space-between">
              <h3>Build {index + 1}</h3>
              <button 
                className="button muted-button"
                onClick={() => {
                  setAddingTestIdForBuild(build.id);
                  // Use a setTimeout to ensure the DOM has been updated
                  setTimeout(() => {
                    if (addTestFormRef.current) {
                      addTestFormRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}>
                  <span role="img" aria-label="Add Test">➕</span> Test
              </button>
            </div>
            <textarea
              value={editableBuildDescriptions[build.id] || build.description}
              onChange={(e) => handleBuildDescriptionChange(build.id, e.target.value)}
              rows="4"
              style={{ width: '100%' }}
            />
            <button onClick={() => updateBuildDescription(build.id)}>Save</button>
            <div>
              {renderBuildImageUpload(build)}            
            </div>
            {testsByBuildId[build.id] && testsByBuildId[build.id].map((test, testIndex) => (
              <div key={test.id}>
                <h4>Test {testIndex + 1}</h4>
                <div>
                  <strong>Description</strong>
                  <textarea
                    value={editableTestDescriptions[test.id] || test.description}
                    onChange={(e) => handleTestDescriptionChange(test.id, e.target.value)}
                    rows="4"
                    style={{ width: '100%' }}
                  />
                </div>
                <div> 
                  {renderTestImageUpload(test, build.id)}
                </div>
                <div>
                  <strong>Results</strong>
                  <textarea
                    value={editableTestResults[test.id] || test.results}
                    onChange={(e) => handleTestResultsChange(test.id, e.target.value)}
                    rows="4"
                    style={{ width: '100%', marginTop: '10px' }}
                    placeholder="Results"
                  />
                </div>
                <div>
                  <strong>Conclusions</strong>
                  <textarea
                    value={editableTestConclusions[test.id] || test.conclusions}
                    onChange={(e) => handleTestConclusionsChange(test.id, e.target.value)}
                    rows="4"
                    style={{ width: '100%', marginTop: '10px' }}
                    placeholder="Conclusions"
                  />
                </div>
                <button onClick={() => updateTestDescription(test.id, build.id)}>Save</button>
              </div>
            ))}

            {addingTestIdForBuild === build.id && (
              <div className="new-build-record" ref={addTestFormRef}>
                <h3>Test {(testsByBuildId[build.id] ? testsByBuildId[build.id].length : 0) + 1}</h3>
                <AddTest
                  designId={selectedDesign.id}
                  buildId={build.id}
                  refreshTests={() => refreshTestsForBuild(build.id)}
                  setAddingTestIdForBuild={setAddingTestIdForBuild}
                />
              </div>
            )}
          </div>
        ))}
        <div>
          {isAddingBuild && (
            <div className="new-build-record" ref={addBuildFormRef}>
              <h3>Build {builds.length + 1}</h3>
              <AddBuild
                designId={selectedDesign.id}
                setIsAddingBuild={setIsAddingBuild}
                refreshBuilds={refreshBuilds}
              />
            </div>
          )}
        </div>
      </div>
      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{"Confirmation Needed"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={() => {
            dialogConfirmAction();
            setDialogOpen(false);
          }} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );  
};

export default Edit;
