// src/components/Supplemental/CourseSelector.tsx
import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useUser } from '../../contexts/UserContext';

interface CourseSelectorProps {
  selectedCourse: string;
  onCourseChange: (course: string) => void;
}

const CourseSelector: React.FC<CourseSelectorProps> = ({ selectedCourse, onCourseChange }) => {
  const { userDetails } = useUser();
  const [courses, setCourses] = useState<{ id: string; number: string; title: string }[]>([]);
    
  useEffect(() => {
    if (userDetails?.classes) {
      const userCourses = Object.entries(userDetails.classes).map(([id, course]) => ({
        id,
        number: course.number,
        title: course.title,
      }));
      setCourses(userCourses);
    } else {
      setCourses([]);
    }
  }, [userDetails]);  

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      {courses.length > 0 ? (
        <FormControl sx={{ width: '30%' }}>
          <InputLabel id="course-selector-label">Select Course</InputLabel>
          <Select
            labelId="course-selector-label"
            value={selectedCourse}
            onChange={(e) => onCourseChange(e.target.value)}
          >
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.number} - {course.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Typography variant="body1" align="center">
          No Courses Available
        </Typography>
      )}
    </Box>
  );
};

export default CourseSelector;