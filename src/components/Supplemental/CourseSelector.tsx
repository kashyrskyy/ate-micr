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
  const [courses, setCourses] = useState<{ id: string; number: string; title: string }[]>([{ id: 'public', number: 'Public', title: 'Public' }]);

  useEffect(() => {
    if (userDetails?.classes) {
      const userCourses = Object.entries(userDetails.classes).map(([id, course]) => ({
        id,
        number: course.number,
        title: course.title,
      }));
      setCourses([{ id: 'public', number: 'Public', title: 'Public' }, ...userCourses]);
    } else {
      setCourses([{ id: 'public', number: 'Public', title: 'Public' }]);
    }
  }, [userDetails]);

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      {courses.map((course) => (
        <Button
          key={course.id}
          variant={selectedCourse === course.id ? 'contained' : 'outlined'}
          onClick={() => onCourseChange(course.id)}
        >
          {course.number} - {course.title}
        </Button>
      ))}
    </Box>
  );
};

export default CourseSelector;