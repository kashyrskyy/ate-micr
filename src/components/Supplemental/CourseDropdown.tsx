// src/components/Supplemental/CourseDropdown.tsx
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';

interface CourseDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const CourseDropdown: React.FC<CourseDropdownProps> = ({ value, onChange }) => {
  const [courses, setCourses] = useState<string[]>([]);
  const { userDetails } = useUser();
  const db = getFirestore();

  useEffect(() => {
    const fetchCourses = async () => {
      if (userDetails?.class) {
        const userCourses = userDetails.class;
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesList = querySnapshot.docs
          .map((doc) => doc.data().name)
          .filter((course) => userCourses.includes(course));
        setCourses(coursesList);
      }
    };
    fetchCourses();
  }, [db, userDetails]);

  return (
    <TextField
      select
      label="Select Course"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{ mb: 2 }}
    >
      {courses.map((course) => (
        <MenuItem key={course} value={course}>
          {course}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CourseDropdown;