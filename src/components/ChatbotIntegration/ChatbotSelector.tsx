// src/components/ChatbotIntegration/ChatbotSelector.tsx

import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import { SelectChangeEvent } from '@mui/material';

import Dropdown from './Dropdown'; // Import Dropdown component

interface Chatbot {
  id: string;
  chatbotId: string;
  title: string;
  courseId: string;
  materialId: string;
}

interface Course {
  id: string;
  title: string;
}

interface Material {
  id: string;
  title: string;
}

interface ChatbotSelectorProps {
  onChatbotChange: (chatbotId: string | null) => void;
}

const ChatbotSelector: React.FC<ChatbotSelectorProps> = ({ onChatbotChange }) => {
  const { userDetails } = useUser();
  const [courses, setCourses] = useState<Course[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(null);
  const [selectedChatbotId, setSelectedChatbotId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoursesAndChatbots = async () => {
      if (!userDetails?.classes) {
        setError('No enrolled classes found.');
        setLoading(false);
        return;
      }

      const db = getFirestore();
      const enrolledCourseIds = Object.keys(userDetails.classes);
      const chatbotsRef = collection(db, 'chatbots');

      try {
        const q = query(chatbotsRef, where('courseId.id', 'in', enrolledCourseIds));
        const querySnapshot = await getDocs(q);

        const coursesMap: Record<string, string> = {};
        const fetchedChatbots: Chatbot[] = [];
        const fetchedMaterials: Material[] = [];

        querySnapshot.docs.forEach((doc) => {
          const data = doc.data();
          fetchedChatbots.push({
            id: doc.id,
            chatbotId: data.chatbotId,
            title: data.title, // Chatbot title
            courseId: data.courseId.id,
            materialId: data.material?.id || '',
          });
          if (data.courseId) {
            coursesMap[data.courseId.id] = data.courseId.title; // Course title
          }
          if (data.material) {
            const { id, title } = data.material;
            if (!fetchedMaterials.some((m) => m.id === id)) {
              fetchedMaterials.push({ id, title });
            }
          }
        });

        setChatbots(fetchedChatbots);
        setCourses(
          Object.entries(coursesMap).map(([id, title]) => ({ id, title }))
        );
        setMaterials(fetchedMaterials);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses and chatbots:', err);
        setError('Failed to load courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCoursesAndChatbots();
  }, [userDetails]);

  const handleCourseChange = (event: SelectChangeEvent<string>) => {
    const courseId = event.target.value;
    setSelectedCourseId(courseId);
    setSelectedMaterialId(null);
    setSelectedChatbotId(null);
    onChatbotChange(null);
  };

  const handleMaterialChange = (event: SelectChangeEvent<string>) => {
    const materialId = event.target.value;
    setSelectedMaterialId(materialId);
    setSelectedChatbotId(null);
    onChatbotChange(null);
  };

  const handleChatbotChange = (event: SelectChangeEvent<string>) => {
    const chatbotId = event.target.value;
    setSelectedChatbotId(chatbotId);
    onChatbotChange(chatbotId || null);
  };

  const filteredMaterials = selectedCourseId
    ? materials.filter((material) =>
        chatbots.some(
          (cb) => cb.courseId === selectedCourseId && cb.materialId === material.id
        )
      )
    : [];

  const filteredChatbots = selectedCourseId && selectedMaterialId
    ? chatbots.filter(
        (chatbot) =>
          chatbot.courseId === selectedCourseId &&
          chatbot.materialId === selectedMaterialId
      )
    : [];

  if (loading) {
    return <CircularProgress size={24} />;
  }

  if (error) {
    return (
      <Box>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minWidth: 200, backgroundColor: '#f5f5f5', borderRadius: 1, p: 1, boxShadow: 1 }}>
      <Dropdown
        label="Filter by Course"
        value={selectedCourseId}
        onChange={handleCourseChange}
        options={courses}
        placeholder="Select Course"
      />
      {selectedCourseId && (
        <Dropdown
          label="Filter by Material"
          value={selectedMaterialId}
          onChange={handleMaterialChange}
          options={filteredMaterials.map((material) => ({
            id: material.id,
            title: material.title,
          }))}
          placeholder="Select Material"
        />
      )}
      {selectedMaterialId && (
        <Dropdown
          label="Filter by Chatbot"
          value={selectedChatbotId}
          onChange={handleChatbotChange}
          options={filteredChatbots.map((cb) => ({
            id: cb.chatbotId,
            title: cb.title,
          }))}
          placeholder="Select Chatbot"
        />
      )}
    </Box>
  );
};

export default ChatbotSelector;