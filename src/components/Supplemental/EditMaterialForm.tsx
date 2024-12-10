// src/components/Supplemental/EditMaterialForm.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import AddMaterialForm from './AddMaterialForm';
import { Material } from '../../types/Material';
import { Box, CircularProgress } from '@mui/material';
import { useUser } from '../../contexts/UserContext';

const EditMaterialForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const db = getFirestore();
  const { userDetails } = useUser();
  const [materialData, setMaterialData] = useState<Material | null>(null);

  useEffect(() => {
    if (id) {
      const fetchMaterial = async () => {
        try {
          const docRef = doc(db, 'materials', id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const material = { id: docSnap.id, ...docSnap.data() } as Material;

            // Ensure sections and nested data are properly structured
            material.sections = material.sections?.map(section => ({
              ...section,
              images: section.images?.map(image => ({ ...image, title: image.title || '' })) || [],
              subsections: section.subsections?.map(subsection => ({
                ...subsection,
                images: subsection.images?.map(image => ({ ...image, title: image.title || '' })) || [],
                subSubsections: subsection.subSubsections?.map(subSubsection => ({
                  ...subSubsection,
                  images: subSubsection.images?.map(image => ({ ...image, title: image.title || '' })) || []
                })) || [],
              })) || [],
            })) || [];

            // Validate the course field
            const validCourses = userDetails?.classes
              ? Object.entries(userDetails.classes)
                  .filter(([_, course]) => course.isCourseAdmin)
                  .map(([id]) => id)
              : [];

            material.course = validCourses.includes(material.course)
              ? material.course
              : validCourses[0] || ''; // Default to first valid course or empty string

            setMaterialData(material);
          }
        } catch (error) {
          console.error('Error fetching material:', error);
        }
      };

      fetchMaterial();
    }
  }, [id, db, userDetails]);

  const handleUpdateMaterial = async (updatedData: Material) => {
    try {
      if (id) {
        const docRef = doc(db, 'materials', id);
        await updateDoc(docRef, { ...updatedData });
      }
    } catch (error) {
      console.error('Error updating material:', error);
    }
  };

  if (!materialData) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return <AddMaterialForm materialData={materialData} onSubmit={handleUpdateMaterial} />;
};

export default EditMaterialForm;