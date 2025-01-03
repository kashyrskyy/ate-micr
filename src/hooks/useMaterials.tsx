// src/hooks/useMaterials.tsx
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

export interface Material {
  id: string;
  title: string;
}

const useMaterials = (courseId: string) => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseId) {
      setMaterials([]);
      return;
    }

    const fetchMaterials = async () => {
      setLoading(true);
      setError(null);

      try {
        const db = getFirestore();
        const q = query(collection(db, 'materials'), where('course', '==', courseId));
        const querySnapshot = await getDocs(q);

        const fetchedMaterials = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title || 'Untitled Material',
        }));

        setMaterials(fetchedMaterials);
      } catch (error) {
        console.error('Error fetching materials:', error);
        setError('Failed to load materials. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [courseId]);

  return { materials, loading, error };
};

export default useMaterials;