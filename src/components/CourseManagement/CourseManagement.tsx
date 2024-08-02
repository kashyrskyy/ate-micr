// src/components/CourseManagement.tsx
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CourseStudentManagement from './CourseStudentManagement';

const CourseManagement: React.FC = () => {
  const { userDetails } = useUser();
  const [students, setStudents] = useState<any[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      if (userDetails) {
        const userCourses = userDetails.class || [];

        const studentsQuery = query(
          collection(db, 'users'),
          where('class', 'array-contains-any', userCourses),
          where('isAdmin', '==', false)
        );

        const studentsSnapshot = await getDocs(studentsQuery);
        const studentsList = studentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setStudents(studentsList);
        setSelectedCourse(userCourses[0] || '');
      }
    };

    fetchStudents();
  }, [userDetails, db]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleCourseChange = (course: string) => {
    setSelectedCourse(course);
  };

  // New function to refresh the student list
  const refreshStudents = async () => {
    if (userDetails) {
      const studentsQuery = query(
        collection(db, 'users'),
        where('class', 'array-contains', selectedCourse),
        where('isAdmin', '==', false)
      );

      const studentsSnapshot = await getDocs(studentsQuery);
      const studentsList = studentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setStudents(studentsList);
    }
  };

  // New effect to refresh students when the course changes
  useEffect(() => {
    refreshStudents();
  }, [selectedCourse, db]);

  const filteredStudents = students.filter(student => student.class.includes(selectedCourse));

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Button variant="text" onClick={handleNavigateHome} sx={{ mr: 2 }}>
          &larr; Home Page
        </Button>
      </Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Course Management
      </Typography>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', textDecoration: 'underline', mb: 2 }}>
        Students Enrolled in Your Courses
      </Typography>
      {userDetails?.class && userDetails.class.length > 1 && (
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          {userDetails.class.map(course => (
            <Button
              key={course}
              variant={selectedCourse === course ? 'contained' : 'outlined'}
              onClick={() => handleCourseChange(course)}
            >
              {course}
            </Button>
          ))}
        </Stack>
      )}
      {filteredStudents.length === 0 ? (
        <Typography>No students enrolled in {selectedCourse}.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>User ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Courses</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Last Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.class.join(', ')}</TableCell>
                  <TableCell>{student.lastLogin ? new Date(student.lastLogin.seconds * 1000).toLocaleString() : 'No data available'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <CourseStudentManagement selectedCourse={selectedCourse} onStudentChange={refreshStudents} />
    </Box>
  );
};

export default CourseManagement;