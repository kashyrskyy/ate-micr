// src/components/Supplemental/MaterialGrid.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, CircularProgress, IconButton, Chip, Button, Snackbar, Alert } from '@mui/material';
import { getFirestore, collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { Material } from '../../types/Material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteMaterialDialog from './DeleteMaterialDialog';

import UnpublishButton from './UnpublishButton';
import UnpublishMaterial from './UnpublishMaterial';

import CourseSelector from './CourseSelector';

const MaterialGrid: React.FC = () => {
  const { userDetails } = useUser();
  const db = getFirestore();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState('Public');
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  
  const [confirmUnpublish, setConfirmUnpublish] = useState<{ open: boolean, materialId: string | null }>({ open: false, materialId: null });
  
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails) return;

    setLoading(true);

    const q = userDetails.isAdmin
      ? query(collection(db, 'materials'), where('course', '==', selectedCourse), orderBy('timestamp', 'desc'))
      : query(collection(db, 'materials'), where('course', '==', selectedCourse), where('published', '==', true), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const materialsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Material[];
      setMaterials(materialsData);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setError('Failed to fetch materials');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db, userDetails, selectedCourse]);

  const handleDeleteClick = (id: string) => {
    setSelectedMaterial(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedMaterial(null);
  };

  const handleDeleteMaterial = () => {
    setMaterials(materials.filter(material => material.id !== selectedMaterial));
  };

  const handleUnpublishClick = (materialId: string) => {
    setConfirmUnpublish({ open: true, materialId });
  };
  
  const handleUnpublish = () => {
    setMaterials(materials.map(material => material.id === confirmUnpublish.materialId ? { ...material, published: false } : material));
  };
  
  const handleCancelUnpublish = () => {
    setConfirmUnpublish({ open: false, materialId: null });
  };  

  if (loading) {
    return <CircularProgress />;
  }

  const savedMaterials = materials.filter((material) => !material.published && !material.scheduledTimestamp);
  const publishScheduledMaterials = materials.filter((material) => material.scheduledTimestamp && !material.published);
  const publishedMaterials = materials.filter((material) => material.published);

  return (
    <Box sx={{ width: '100%' }}>
      <CourseSelector 
        selectedCourse={selectedCourse} 
        onCourseChange={(course) => {
          setLoading(true);
          setSelectedCourse(course);
        }} 
      />
      {userDetails?.isAdmin && (
        <>
          <Box sx={{ backgroundColor: '#FFF9C4', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#F57C00' }}>
              Saved
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {savedMaterials.length === 0 ? (
              <Typography variant="body1" align="center" sx={{ width: '100%' }}>
                No saved (unpublished) materials found.
              </Typography>
            ) : (
              savedMaterials.map((material) => (
                <Grid item xs={12} sm={6} md={4} key={material.id}>
                  <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: 2, position: 'relative', backgroundColor: '#FFF9C4' }}>
                    <Box>
                      {material.author === userDetails?.uid && (
                        <Chip 
                          label="My Material" 
                          variant="outlined" 
                          sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#C5E1A5', color: '#2E7D32', ml: 1 }} 
                        />
                      )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => navigate(`/view-material/${material.id}`)} aria-label="view">
                        <VisibilityIcon />
                      </IconButton>
                      <Typography variant="h6">{material.title || 'Untitled'}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="textSecondary">
                        Created Date: {material.timestamp.toDate().toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Status: Saved
                      </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                      {userDetails?.isAdmin && (
                        <>
                          <IconButton onClick={() => navigate(`/edit-material/${material.id}`)} aria-label="edit">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => handleDeleteClick(material.id)} aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )}
                    </Box>
                    <Box sx={{ backgroundColor: '#E0F7FA', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mt: 2 }}>
                      <Typography variant="body2" sx={{ color: '#00796B', fontWeight: 'bold' }}>
                        {material.course || 'N/A'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>

          <Box sx={{ backgroundColor: '#E3F2FD', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0D47A1' }}>
              Publish Scheduled
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {publishScheduledMaterials.length === 0 ? (
              <Typography variant="body1" align="center" sx={{ width: '100%' }}>
                No materials scheduled for publishing found.
              </Typography>
            ) : (
              publishScheduledMaterials.map((material) => (
                <Grid item xs={12} sm={6} md={4} key={material.id}>
                  <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: 2, position: 'relative', backgroundColor: '#E3F2FD' }}>
                    <Box>
                      {material.author === userDetails?.uid && (
                        <Chip 
                          label="My Material" 
                          variant="outlined" 
                          sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#C5E1A5', color: '#2E7D32', ml: 1 }} 
                        />
                      )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => navigate(`/view-material/${material.id}`)} aria-label="view">
                        <VisibilityIcon />
                      </IconButton>
                      <Typography variant="h6">{material.title || 'Untitled'}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="textSecondary">
                        Created Date: {material.timestamp.toDate().toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Status: Scheduled for Publishing
                      </Typography>
                    </Box>
                    {material.scheduledTimestamp && (
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Box sx={{ backgroundColor: '#E3F2FD', border: '1px solid #90CAF9', borderRadius: '16px', padding: '4px 8px' }}>
                          <Typography variant="body2" sx={{ color: '#0D47A1', fontWeight: 'bold' }}>
                            Publish Date: {material.scheduledTimestamp.toDate().toLocaleString()}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                      {userDetails?.isAdmin && (
                        <>
                          <IconButton onClick={() => navigate(`/edit-material/${material.id}`)} aria-label="edit">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => handleDeleteClick(material.id)} aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                          <UnpublishButton
                            materialId={material.id}
                            onClick={handleUnpublishClick}
                          />
                        </>
                      )}
                    </Box>
                    <Box sx={{ backgroundColor: '#E0F7FA', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mt: 2 }}>
                      <Typography variant="body2" sx={{ color: '#00796B', fontWeight: 'bold' }}>
                        {material.course || 'N/A'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </>
      )}

      <Box sx={{ backgroundColor: '#E8F5E9', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mt: 4, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
          Published
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {publishedMaterials.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ width: '100%' }}>
            No published materials found.
          </Typography>
        ) : (
          publishedMaterials.map((material) => (
            <Grid item xs={12} sm={6} md={4} key={material.id}>
              <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: 2, position: 'relative', backgroundColor: '#E8F5E9' }}>
                <Box>
                  {material.author === userDetails?.uid && (
                    <Chip 
                      label="My Material" 
                      variant="outlined" 
                      sx={{ borderRadius: '15px', fontWeight: 'bold', background: '#C5E1A5', color: '#2E7D32', ml: 1 }} 
                    />
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => navigate(`/view-material/${material.id}`)} aria-label="view">
                    <VisibilityIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ flexGrow: 1, maxWidth: '50%', wordWrap: 'break-word'}}>{material.title || 'Untitled'}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="textSecondary">
                    Date: {material.timestamp.toDate().toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Status: Published
                  </Typography>
                </Box>
                <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                  {userDetails?.isAdmin && (
                    <>
                      <IconButton onClick={() => navigate(`/edit-material/${material.id}`)} aria-label="edit">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteClick(material.id)} aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <UnpublishButton
                        materialId={material.id}
                        onClick={handleUnpublishClick}
                      />
                    </>
                  )}
                </Box>
                <Box sx={{ backgroundColor: '#E0F7FA', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mt: 2 }}>
                  <Typography variant="body2" sx={{ color: '#00796B', fontWeight: 'bold' }}>
                    {material.course || 'N/A'}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>

      {selectedMaterial && (
        <DeleteMaterialDialog
          materialId={selectedMaterial}
          open={openDialog}
          onClose={handleCloseDialog}
          onDelete={handleDeleteMaterial}
        />
      )}

      {confirmUnpublish.materialId && (
        <UnpublishMaterial
          materialId={confirmUnpublish.materialId}
          open={confirmUnpublish.open}
          onClose={handleCancelUnpublish}
          onUnpublish={handleUnpublish}
        />
      )}

      {error && (
        <Snackbar open={true} autoHideDuration={6000} onClose={() => setError(null)}>
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default MaterialGrid;