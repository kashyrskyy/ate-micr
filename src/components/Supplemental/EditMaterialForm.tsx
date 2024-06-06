// src/components/Supplemental/EditMaterialForm.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import AddMaterialForm from './AddMaterialForm';
import { Material } from '../../types/Material';
import CircularProgress from '@mui/material/CircularProgress';

const EditMaterialForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const db = getFirestore();
  const [materialData, setMaterialData] = useState<Material | null>(null);

  useEffect(() => {
    if (id) {
      const fetchMaterial = async () => {
        const docRef = doc(db, 'materials', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMaterialData({ id: docSnap.id, ...docSnap.data() } as Material);
        }
      };
      fetchMaterial();
    }
  }, [id, db]);

  const handleUpdateMaterial = async (updatedData: Material) => {
    if (id) {
      const docRef = doc(db, 'materials', id);
      await updateDoc(docRef, { ...updatedData });
    }
  };

  if (!materialData) return <CircularProgress />;

  return <AddMaterialForm materialData={materialData} onSubmit={handleUpdateMaterial} />;
};

export default EditMaterialForm;