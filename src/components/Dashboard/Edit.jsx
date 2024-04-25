// Edit.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../../contexts/UserContext';

import { collection, query, where, getDocs, doc, setDoc, Timestamp, orderBy, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../config/firestore';

import AddBuild from './AddBuild';
import AddTest from './AddTest';

import ImageUpload from './ImageUpload';
import TextEditor from './TextEditor'; 
import FileUpload from './FileUpload'; 

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';

const Edit = ({ selectedDesign, setIsEditing, getDesigns, onReturnToDashboard }) => {
  const { userDetails, loading } = useUser();
  console.log("Edit page loaded");

  const id = selectedDesign.id;

  console.log("Design ID:", id);

  const [description, setDesignDescription] = useState(selectedDesign.description);
  const [date, setDate] = useState(selectedDesign.dateDue || '');
  const [title, setTitle] = useState('');

  const [isAddingBuild, setIsAddingBuild] = useState(false);
  const [builds, setBuilds] = useState([]);
  const [testsByBuildId, setTestsByBuildId] = useState({});
  const [addingTestIdForBuild, setAddingTestIdForBuild] = useState(false);

  const [editableBuildDescriptions, setEditableBuildDescriptions] = useState({});

  const [editableTestDescriptions, setEditableTestDescriptions] = useState({});
  const [editableTestResults, setEditableTestResults] = useState({});
  const [editableTestConclusions, setEditableTestConclusions] = useState({});

  const [images, setImages] = useState([]);
  const imageUploadRef = useRef(null);

  const [files, setFiles] = useState([]);

  const [buildImages, setBuildImages] = useState({});
  const [testImages, setTestImages] = useState({});

  const [buildFiles, setBuildFiles] = useState({});
  const [testFiles, setTestFiles] = useState({});

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

  // State for tracking unsaved changes
  const [unsavedChanges, setUnsavedChanges] = useState({
    design: false, // You can add more sections as needed
    builds: false,
    tests: false,
  });

  const [visibleBuildDetails, setVisibleBuildDetails] = useState({});
  const [visibleTestDetails, setVisibleTestDetails] = useState({});

  // States for editing titles of Builds and Tests
  const [editableBuildTitles, setEditableBuildTitles] = useState({});
  const [editableTestTitles, setEditableTestTitles] = useState({});

  console.log('Editing Design by user:', userDetails);

  const handleBuildTitleChange = (buildId, newTitle) => {
    setEditableBuildTitles(prev => ({ ...prev, [buildId]: newTitle }));
  };
  
  const handleTestTitleChange = (testId, newTitle) => {
    setEditableTestTitles(prev => ({ ...prev, [testId]: newTitle }));
  };
  
  const saveBuildTitle = async (buildId) => {
    const newTitle = editableBuildTitles[buildId];
    try {
      // Update Firestore
      const buildRef = doc(db, "builds", buildId);
      await setDoc(buildRef, { title: newTitle }, { merge: true });
      // Update local state if necessary and reset editable state
      setEditableBuildTitles(prev => {
        const updated = { ...prev };
        delete updated[buildId]; // Remove the entry as it's no longer being edited
        return updated;
      });
      refreshBuilds(); // Refresh your builds to reflect the change
      // Optionally, show a success message
    } catch (error) {
      console.error("Failed to save build title:", error);
      // Show an error message to the user
    }
  };  
  
  const saveTestTitle = async (testId, buildId) => {
    const newTitle = editableTestTitles[testId];
    // Update Firestore
    const testRef = doc(db, "tests", testId);
    await setDoc(testRef, { title: newTitle }, { merge: true });
    // Optionally update local state and reset editable state
    setEditableTestTitles(prev => {
      const updated = { ...prev };
      delete updated[testId]; // Remove the entry as it's no longer being edited
      return updated;
    });
    refreshTestsForBuild(buildId)// Refresh tests for the build that this test belongs to
  };  

  const handleBuildDescriptionChange = (buildId, value) => {
    setEditableBuildDescriptions(prev => ({ ...prev, [buildId]: value }));
    setUnsavedChanges(prev => ({ ...prev, builds: true }));
  };
  
  const handleTestDescriptionChange = (testId, value) => {
    console.log(`Updating description for test ID ${testId}:`, value);
    setEditableTestDescriptions(prev => ({ ...prev, [testId]: value }));
    setUnsavedChanges(prev => ({ ...prev, tests: true }));
  };  

  const updateBuildDescription = async (buildId) => {
    const buildRef = doc(db, "builds", buildId);
  
    // Prepare the update data object and include only defined fields.
    const updatedData = {};
    if (editableBuildDescriptions[buildId] !== undefined) {
      updatedData.description = editableBuildDescriptions[buildId];
    }
    if (buildImages[buildId] && buildImages[buildId].length > 0) {
      updatedData.images = buildImages[buildId].map(img => ({
        url: img.url,
        title: img.title,
        path: img.path
      }));
    }
    if (buildFiles[buildId] && buildFiles[buildId].length > 0) {
      updatedData.files = buildFiles[buildId].map(file => ({
        id: file.id,  // Preserve the ID
        url: file.url,
        name: file.name,
        path: file.path
      }));
    }
  
    try {
      await setDoc(buildRef, updatedData, { merge: true });
      setSnackbarMessage('Your build has been updated.');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      refreshBuilds();
      setUnsavedChanges(prev => ({ ...prev, builds: false }));
    } catch (error) {
      console.error("Error updating build:", error);
      setSnackbarMessage('Failed to update build.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };  

  const updateTestDescription = async (testId, buildId) => {
    // Prepare the update data object and include only defined fields.
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

    // Include image and file data if they are defined.
    if (testImages[testId]) {
      updateData.images = testImages[testId].map(img => ({
        url: img.url,
        title: img.title,
        path: img.path
      }));
    }
    if (testFiles[testId]) {
      updateData.files = testFiles[testId].map(file => ({
        id: file.id,  // Preserve the ID
        url: file.url,
        name: file.name,
        path: file.path
      }));
    }

    try {
      // Perform the update in Firestore.
      const testRef = doc(db, "tests", testId);
      await setDoc(testRef, updateData, { merge: true });
      
      // Show a success message.
      setSnackbarMessage('Your test has been updated.');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
  
      // Refresh the tests to show the updated information.
      refreshTestsForBuild(buildId);
    } catch (error) {
      console.error(`Error updating test ID: ${testId}:`, error);
      
      // Show an error message.
      setSnackbarMessage('There was an issue updating your test.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };  

  const handleTestResultsChange = (testId, value) => {
    console.log(`Updating results for test ID ${testId}:`, value);
    setEditableTestResults(prev => ({ ...prev, [testId]: value }));
    setUnsavedChanges(prev => ({ ...prev, tests: true }));
  };
  
  const handleTestConclusionsChange = (testId, value) => {
    setEditableTestConclusions(prev => ({ ...prev, [testId]: value }));
    setUnsavedChanges(prev => ({ ...prev, tests: true }));
  };

  // useEffect hook for initializing form fields
  useEffect(() => {
    if (selectedDesign) {
      setDesignDescription(selectedDesign.description || '');
      setTitle(selectedDesign.title || '');

      // Fetch image URL from Firestore
      const fetchData = async () => {
        const designRef = doc(db, "designs", id);
        const docSnap = await getDoc(designRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Fetched images:', data.images); // Add this line to debug
          console.log('Fetched files:', data.files); // Add this line to debug
          setImages(data.images || []);
          setFiles(data.files || []);
        }
      };

      fetchData();
  
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
      let fetchedBuilds = [];
      let tempTestsByBuildId = {};

      for (const buildDoc of querySnapshot.docs) {
        const buildData = buildDoc.data();
        const buildId = buildDoc.id;
        fetchedBuilds.push({
          id: buildId,
          ...buildData,
          images: buildData.images || [], // Make sure images is an array
          files: buildData.files || [] // Make sure files is an array
        });

        const testsQuery = query(collection(db, "tests"), where("build_ID", "==", buildId), where("userId", "==", userDetails.uid), orderBy("dateCreated"));
        const testsSnapshot = await getDocs(testsQuery);
        let fetchedTests = [];
        let buildTestImages = {};
        let buildTestFiles = {};

        for (const testDoc of testsSnapshot.docs) {
          const testData = testDoc.data();
          fetchedTests.push({
            id: testDoc.id,
            ...testData,
          });
          buildTestImages[testDoc.id] = testData.images || [];
          buildTestFiles[testDoc.id] = testData.files || [];
        }
        tempTestsByBuildId[buildId] = fetchedTests;
        
        setTestImages(prevImages => {
          let updatedImages = {...prevImages};
          for (const testId in buildTestImages) {
            updatedImages[testId] = buildTestImages[testId];
          }
          return updatedImages;
        });

        setTestFiles(prevFiles => {
          let updatedFiles = {...prevFiles};
          for (const testId in buildTestFiles) {
            updatedFiles[testId] = buildTestFiles[testId];
          }
          return updatedFiles;
        });
      }
      // Update state with fetched data
      setBuilds(fetchedBuilds);
      setTestsByBuildId(tempTestsByBuildId);
    };

    if (!loading && userDetails) {
      fetchBuildsAndTests();
    }
  }, [loading, userDetails, selectedDesign.id, id]);

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
  
    try {
      const testsQuery = query(
        collection(db, "tests"),
        where("build_ID", "==", buildId),
        where("userId", "==", userDetails.uid), // Ensure the user can only access their tests
        orderBy("dateCreated")
      );
      const testsSnapshot = await getDocs(testsQuery);
      const fetchedTests = testsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        images: doc.data().images || [], // Ensure images is an array
        files: doc.data().files || [] // Ensure files is an array
      }));
    
      // Update tests for the specific build in state
      setTestsByBuildId(prev => ({
        ...prev,
        [buildId]: fetchedTests
      }));
  
      let newTestImages = {};
      let newTestFiles = {};
    
      fetchedTests.forEach(test => {
        newTestImages[test.id] = test.images;
        newTestFiles[test.id] = test.files;
      });
    
      setTestImages(newTestImages);
      setTestFiles(newTestFiles);
    } catch (error) {
      console.error("Error fetching tests:", error);
      // Optionally set an error state or show a notification
    }
  };  

  const handleImagesUpdated = (updatedImages) => {
    if (JSON.stringify(images) !== JSON.stringify(updatedImages)) {
      setImages(updatedImages);  // Update state with new image data
      console.log("Updated images received:", updatedImages);
    }
  };  

  const handleImageDeletions = (deletedImages) => {
    const remainingImages = images.filter(img => !deletedImages.some(delImg => delImg.path === img.path));
    console.log("Remaining images after deletion:", remainingImages);
    setImages(remainingImages);
    const imageUpdate = remainingImages.map(img => ({ url: img.url, title: img.title, path: img.path }));
    setDoc(doc(db, "designs", id), { images: imageUpdate }, { merge: true })
      .then(() => console.log("Firestore successfully updated"))
      .catch(error => console.error("Failed to update Firestore:", error));
  };  

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!description || !date) {
      setDialogContent('All fields are required.');
      setDialogOpen(true);
      return;
    }

    // Delete images if needed
    console.log("About to check image deletions", imageUploadRef.current);
    console.log(imageUploadRef.current)
    console.log(images.some(img => img.deleted))
    if (imageUploadRef.current && images.some(img => img.deleted)) {
      console.log("Committing deletions");
      await imageUploadRef.current.commitDeletions();
    }

    // Filter out images marked as deleted (this might be redundant if handled by commitDeletions)
    const activeImages = images.filter(img => !img.deleted);

    // Construct the update object dynamically
    let updateObject = {
        title,
        description,
        dateDue: Timestamp.fromDate(new Date(date)), // Convert string to Date, then to Firestore Timestamp
        images: activeImages.map(img => ({ url: img.url, title: img.title, path: img.path })),
        files: files.map(file => ({ id: file.id, url: file.url, name: file.name, path: file.path })), // Include files in the update
        userId: userDetails.uid
    };

    try {
      await setDoc(doc(db, "designs", id), updateObject, { merge: true });
      setSnackbarMessage('Your design has been updated.');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error updating design:", error);
      setSnackbarMessage('There was an issue updating your design.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }

    // After successful update:
    setUnsavedChanges(prev => ({ ...prev, design: false }));
  };

  // Function to handle updates to build images
  const handleBuildImagesUpdated = (buildId, newImages) => {
    setBuildImages(prev => ({
      ...prev,
      [buildId]: newImages
    }));
  };

  // Function to update images for a specific test
  const handleTestImagesUpdated = (testId, newImages) => {
    setTestImages(prevImages => ({
      ...prevImages,
      [testId]: newImages
    }));
  };

  // Function to update files for a specific test
  const handleTestFilesUpdated = (testId, newFiles) => {
    setTestFiles(prevFiles => ({
      ...prevFiles,
      [testId]: newFiles
    }));
  };

  const handleBuildFilesUpdated = (buildId, newFiles) => {
    setBuildFiles(prev => ({
      ...prev,
      [buildId]: newFiles
    }));
  };

  const promptBeforeLeaving = () => {
    const unsavedSections = Object.entries(unsavedChanges)
      .filter(([_, hasUnsaved]) => hasUnsaved)
      .map(([section]) => section)
      .join(", ");
  
    if (!unsavedSections.length) {
      onReturnToDashboard();
      return;
    }
  
    const message = `You have unsaved changes in the following sections: ${unsavedSections}. Are you sure you want to leave?`;
    setDialogContent(message);
    setDialogConfirmAction(() => () => {
      setUnsavedChanges({
        design: false, 
        builds: false,
        tests: false,
      });
      onReturnToDashboard();
    });
  
    setDialogOpen(true);
  };   
  
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Check if any unsaved changes exist
      const hasUnsavedChanges = Object.values(unsavedChanges).some(value => value);
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [unsavedChanges]); // Depend on unsavedChanges now instead of isDirty   

  const deleteBuildAndTests = async (buildId) => {
    const testsQuery = query(collection(db, "tests"), where("build_ID", "==", buildId), where("userId", "==", userDetails.uid));
    const testsSnapshot = await getDocs(testsQuery);

    for (const testDoc of testsSnapshot.docs) {
        // Correctly reference the document to delete
        await deleteDoc(doc(db, "tests", testDoc.id));
    }

    // Correctly reference the build document to delete
    await deleteDoc(doc(db, "builds", buildId));

    // Refresh the UI accordingly
    await refreshBuilds();
    setSnackbarMessage('Build and its tests (if any) deleted successfully.');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
};

  const deleteTest = async (testId, buildId) => {
    // Delete the test, assuming we've already ensured it belongs to this user elsewhere
    await deleteDoc(doc(db, "tests", testId));
  
    // Refresh tests for the build to reflect this change in the UI
    await refreshTestsForBuild(buildId);
  
    setSnackbarMessage('Test deleted successfully.');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };   
  
  const confirmDeleteBuild = (buildId) => {
    setDialogContent('Are you sure you want to delete this build and all associated tests? This action cannot be undone.');
    setDialogConfirmAction(() => () => deleteBuildAndTests(buildId));
    setDialogOpen(true);
  };
  
  const confirmDeleteTest = (testId, buildId) => {
    setDialogContent('Are you sure you want to delete this test? This action cannot be undone.');
    setDialogConfirmAction(() => () => deleteTest(testId, buildId));
    setDialogOpen(true);
  }; 
  
  return (
    <div className="small-container">
      <button onClick={() => {
        // Check if any unsaved changes exist
        const hasUnsavedChanges = Object.values(unsavedChanges).some(value => value);
        if (hasUnsavedChanges) {
          promptBeforeLeaving(); // Show confirmation dialog if unsaved changes exist
        } else {
          onReturnToDashboard(); // Directly proceed if no unsaved changes
        }
      }} className="muted-button margin-top-20">← All Designs</button>
      <div className="design-record">
        <form onSubmit={handleUpdate}>
          <h1>Design Document</h1>
          <div style={{ marginBottom: '20px' }}>
          </div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
              setUnsavedChanges(prev => ({ ...prev, design: true }));
            }}          
          />
          <label htmlFor="dateDue">Due Date</label>
          <input
            id="dateDue"
            type="date"
            name="dateDue"
            value={date}
            onChange={e => {
              setDate(e.target.value);
              setUnsavedChanges(prev => ({ ...prev, design: true }));
            }}
          />
          <label htmlFor="description">Description</label>
          <ul>
              <li>Objective: What is the goal for this design?</li>
              <li>Rationale: Why is this new design being done?</li>
              <li>Selected Target: What is the target for the design being made?</li>
              <li>Functional Modification: What is being done to this target?</li>
              <li>Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?</li>
          </ul>
          <TextEditor
            initialValue={description}
            onChange={(newDescription) => {
              setDesignDescription(newDescription);
              setUnsavedChanges(prev => ({ ...prev, design: true }));
            }}
          />
          {/* Example for adding an image to a Design */}
          <ImageUpload
            ref={imageUploadRef}
            path={`designs/${selectedDesign.id}/images`}
            initialImages={images}
            onImagesUpdated={handleImagesUpdated}
            onDelete={handleImageDeletions}  
          />
          <FileUpload
            path={`designs/${selectedDesign.id}/files`} // Adjust path to include the design ID
            initialFiles={files}
            onFilesChange={setFiles} // Handler to update state when files change
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
      </div>
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
            <div className="flex-space-between align-items-center">
                <div>
                  {editableBuildTitles[build.id] !== undefined ? (
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={editableBuildTitles[build.id]}
                      onChange={(e) => handleBuildTitleChange(build.id, e.target.value)}
                      onBlur={() => saveBuildTitle(build.id)}
                      autoFocus
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={() => saveBuildTitle(build.id)} size="small">
                            <SaveIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  ) : (
                    <div
                      className="editableTitle"
                      onClick={() => setEditableBuildTitles(prev => ({ ...prev, [build.id]: build.title || `Build ${index + 1}` }))} 
                      style={{ cursor: 'pointer' }}
                    >
                      {build.title || `Build ${index + 1}`}
                    </div>
                  )}
                </div>
                {/* Toggle Button for Build Details */}
                <div> 
                  <button 
                    onClick={() => setVisibleBuildDetails(prev => ({
                      ...prev,
                      [build.id]: !prev[build.id] // Toggle the visibility state
                    }))}
                    className="button muted-button"
                    style={{ border: 'none', background: 'none' }}
                  >
                    {visibleBuildDetails[build.id] ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                  <button 
                    className="button muted-button"
                    style={{ border: 'none', background: 'none' }}
                    onClick={() => confirmDeleteBuild(build.id)}
                  >
                    <DeleteIcon />
                  </button>
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
            </div>
            {visibleBuildDetails[build.id] && (
              <>
                <TextEditor
                  initialValue={editableBuildDescriptions[build.id] || build.description}
                  onChange={(newDescription) => {
                    handleBuildDescriptionChange(build.id, newDescription);
                  }}
                />
                <ImageUpload
                  path={`builds/${build.id}/images`}
                  // initialImages={buildImages[build.id] || []}
                  initialImages={build.images}
                  onImagesUpdated={images => handleBuildImagesUpdated(build.id, images)}
                />
                <FileUpload
                  path={`builds/${build.id}/files`}
                  //initialFiles={buildFiles[build.id] || []}
                  initialFiles={build.files}
                  onFilesChange={files => handleBuildFilesUpdated(build.id, files)}
                />
                <button onClick={() => updateBuildDescription(build.id)}>Update</button>
                {testsByBuildId[build.id] && testsByBuildId[build.id].map((test, testIndex) => (
                  <div key={test.id} className="test-record">
                    <div className="flex-space-between align-items-center">
                      <div>
                        {editableTestTitles[test.id] !== undefined ? (
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={editableTestTitles[test.id]}
                            onChange={(e) => handleTestTitleChange(test.id, e.target.value)}
                            onBlur={() => saveTestTitle(test.id, build.id)}
                            autoFocus
                            InputProps={{
                              endAdornment: (
                                <IconButton onClick={() => saveTestTitle(test.id, build.id)} size="small">
                                  <SaveIcon />
                                </IconButton>
                              ),
                            }}
                          />
                        ) : (
                          <div
                            className="editableTitle"
                            onClick={() => setEditableTestTitles(prev => ({ ...prev, [test.id]: test.title || `Test ${testIndex + 1}` }))} style={{ cursor: 'pointer' }}
                          >
                            {test.title || `Test ${testIndex + 1}`}
                          </div>
                        )}
                      </div>
                      <div>
                        {/* Toggle Button for Test Details */}
                        <button 
                          onClick={() => setVisibleTestDetails(prev => ({
                            ...prev,
                            [test.id]: !prev[test.id] // Toggle the visibility state for this test
                          }))}
                          className="button muted-button"
                          style={{ border: 'none', background: 'none' }}
                        >
                          {visibleTestDetails[test.id] ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </button>
                        <button 
                          className="button muted-button"
                          style={{ border: 'none', background: 'none' }}
                          onClick={() => confirmDeleteTest(test.id, build.id)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                    {visibleTestDetails[test.id] && (
                      <>
                        <div>
                          <strong>Description</strong>
                          <TextEditor
                            initialValue={editableTestDescriptions[test.id] || test.description}
                            onChange={(newTestDescription) => {
                              handleTestDescriptionChange(test.id, newTestDescription);
                            }}
                          />
                        </div>
                        <div>
                          <strong>Results</strong>
                          <TextEditor
                            initialValue={editableTestResults[test.id] || test.results}
                            onChange={(newTestResults) => {
                              handleTestResultsChange(test.id, newTestResults);
                            }}
                          />
                        </div>
                        <div>
                          <strong>Conclusions</strong>
                          <TextEditor
                            initialValue={editableTestConclusions[test.id] || test.conclusions}
                            onChange={(newTestConclusions) => {
                              handleTestConclusionsChange(test.id, newTestConclusions);
                            }}
                          />
                        </div>
                        <div>
                          <ImageUpload
                              path={`tests/${test.id}/images`}
                              initialImages={testImages[test.id] || []}
                              onImagesUpdated={(images) => handleTestImagesUpdated(test.id, images)}
                            />
                            <FileUpload
                              path={`tests/${test.id}/files`}
                              initialFiles={testFiles[test.id] || []}
                              onFilesChange={(files) => handleTestFilesUpdated(test.id, files)}
                            />
                        </div>
                        <button onClick={() => updateTestDescription(test.id, build.id)}>Update</button>
                      </>
                    )}
                  </div>
                ))}
              </>
            )}

            {addingTestIdForBuild === build.id && (
              <div className="new-build-record" ref={addTestFormRef}>
                <h3>Add New Test</h3>
                <AddTest
                  designId={selectedDesign.id}
                  buildId={build.id}
                  refreshTests={() => refreshTestsForBuild(build.id)}
                  setAddingTestIdForBuild={setAddingTestIdForBuild}
                  onImagesUpdated={(images) => handleTestImagesUpdated(build.id, images)}
                  onFilesUpdated={(files) => handleTestFilesUpdated(build.id, files)}
                />
              </div>
            )}
          </div>
        ))}
        <div>
          {isAddingBuild && (
            <div className="new-build-record" ref={addBuildFormRef}>
              <h3>Add New Build</h3>
              <AddBuild
                designId={selectedDesign.id}
                setIsAddingBuild={setIsAddingBuild}
                refreshBuilds={refreshBuilds}
                onImagesUpdated={(images) => handleBuildImagesUpdated(build.id, images)}
                onFilesUpdated={(files) => handleBuildFilesUpdated(build.id, files)}
              />
            </div>
          )}
        </div>
      </div>
      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{"Confirmation Required"}</DialogTitle>
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