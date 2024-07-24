// src/components/Supplemental/CourseSelector.tsx
import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useUser } from '../../contexts/UserContext';

interface CourseSelectorProps {
  selectedCourse: string;
  onCourseChange: (course: string) => void;
}

const CourseSelector: React.FC<CourseSelectorProps> = ({ selectedCourse, onCourseChange }) => {
  const { userDetails } = useUser();
  const [courses, setCourses] = useState<string[]>(['Public-Source']);

  useEffect(() => {
    if (userDetails?.class) {
      const uniqueCourses = Array.from(new Set(['Public-Source', ...userDetails.class]));
      setCourses(uniqueCourses);
    } else {
      setCourses(['Public-Source']);
    }
  }, [userDetails]);

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      {courses.map((course) => (
        <Button
          key={course}
          variant={selectedCourse === course ? 'contained' : 'outlined'}
          onClick={() => onCourseChange(course)}
        >
          {course}
        </Button>
      ))}
    </Box>
  );
};

export default CourseSelector;