// src/components/Supplemental/MaterialGrid.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import { Material } from '../../types/Material';

const MaterialGrid: React.FC = () => {
  const { userDetails } = useUser();
  const db = getFirestore();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userDetails) return;

    const q = query(collection(db, 'materials'), where('author', '==', userDetails.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const materialsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Material[];
      setMaterials(materialsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db, userDetails]);

  if (loading) {
    return <CircularProgress />;
  }

  const unpublishedMaterials = materials.filter((material) => !material.published);
  const publishedMaterials = materials.filter((material) => material.published);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ backgroundColor: '#FFF9C4', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#F57F17' }}>
          Saved (Unpublished)
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {unpublishedMaterials.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ width: '100%' }}>
            No saved (unpublished) materials found.
          </Typography>
        ) : (
          unpublishedMaterials.map((material) => (
            <Grid item xs={12} sm={6} md={4} key={material.id}>
              <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: 2 }}>
                <Typography variant="h6">{material.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {material.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {material.published ? 'Published' : 'Unpublished'}
                </Typography>
              </Box>
            </Grid>
          ))
        )}
      </Grid>

      <Box sx={{ backgroundColor: '#C8E6C9', borderRadius: '8px', padding: '4px 8px', display: 'inline-block', mt: 4, mb: 2 }}>
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
              <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: 2 }}>
                <Typography variant="h6">{material.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {material.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {material.published ? 'Published' : 'Unpublished'}
                </Typography>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default MaterialGrid;