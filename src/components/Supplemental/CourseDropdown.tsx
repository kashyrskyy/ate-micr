// src/components/Supplemental/CourseDropdown.tsx
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useUser } from '../../contexts/UserContext';

interface CourseDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const CourseDropdown: React.FC<CourseDropdownProps> = ({ value, onChange }) => {
  const [courses, setCourses] = useState<string[]>([]);
  const { userDetails } = useUser();

  useEffect(() => {
    if (userDetails?.class && userDetails.class.length > 0) {
      // Set the courses directly from userDetails.class
      setCourses(userDetails.class);
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
        <MenuItem key={course} value={course}>
          {course}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CourseDropdown;