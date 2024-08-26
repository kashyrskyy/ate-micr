// src/components/Supplemental/CourseDropdown.tsx
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useUser } from '../../contexts/UserContext';

interface CourseDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const CourseDropdown: React.FC<CourseDropdownProps> = ({ value, onChange }) => {
  const [courses, setCourses] = useState<{ id: string; number: string; title: string }[]>([]);
  const { userDetails } = useUser();

  useEffect(() => {
    if (userDetails?.classes) {
      // Convert classes object into an array of course objects
      const userCourses = Object.entries(userDetails.classes).map(([id, course]) => ({
        id,
        number: course.number,
        title: course.title,
      }));
      setCourses(userCourses);
    } else {
      setCourses([]); // Set to an empty array if no courses are available
    }
  }, [userDetails]);

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
        <MenuItem key={course.id} value={course.id}>
          {course.number} - {course.title}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CourseDropdown;