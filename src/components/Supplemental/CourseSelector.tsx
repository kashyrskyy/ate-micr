// src/components/Supplemental/CourseSelector.tsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CourseSelectorProps {
  courses: { id: string; number: string; title: string }[];
}

const CourseSelector: React.FC<CourseSelectorProps> = ({ courses }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: 3,
          pb: 2, // Adds padding below the text
          fontFamily: 'Staatliches, sans-serif', // Use the Staatliches font for bold, prominent headings
          fontSize: '2rem', // Adjust font size to make it stand out
          color: '#00695c', // A color that matches your palette
          textTransform: 'uppercase', // Optional: Makes the text uppercase for emphasis
          letterSpacing: '1px', // Adds spacing for a clean look
        }}
      >
        Select a Course
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              onClick={() => navigate(`/supplemental-materials?course=${course.id}`)}
              sx={{
                cursor: 'pointer',
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                },
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  backgroundColor: '#e0f7fa',
                  '&:hover': { backgroundColor: '#b2ebf2' },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Staatliches, sans-serif',
                    fontSize: '1.5rem',
                    color: '#006064',
                  }}
                >
                  {course.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Gabarito, sans-serif',
                    fontSize: '1rem',
                    color: '#004d40',
                    marginTop: 1,
                  }}
                >
                  {course.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseSelector;