// src/components/CourseManagement/CourseManagement.tsx

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useUser, UserDetails } from '../../contexts/UserContext';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CourseStudentManagement from './CourseStudentManagement';
import ExportToCSV from './ExportToCSV';

import EditCourseDetails from './EditCourseDetails';
import DeleteCourse from './DeleteCourse';

const CourseManagement: React.FC = () => {
  const { userDetails } = useUser();
  const [students, setStudents] = useState<UserDetails[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      if (userDetails) {
        const userClasses = userDetails.classes ? Object.keys(userDetails.classes) : [];

        const studentsQuery = query(
          collection(db, 'users'),
          where('classes', 'array-contains-any', userClasses),
          where('isAdmin', '==', false)
        );

        const studentsSnapshot = await getDocs(studentsQuery);

        const studentsList = studentsSnapshot.docs.map(doc => ({
          uid: doc.id,
          ...doc.data() as Omit<UserDetails, 'uid'>,
        })) as UserDetails[];

        setStudents(studentsList);
        setSelectedCourse(userClasses[0] || '');
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

  const refreshStudents = async () => {
    if (userDetails) {
      try {
        const studentsQuery = query(
          collection(db, 'users'),
          where('isAdmin', '==', false)
        );

        const studentsSnapshot = await getDocs(studentsQuery);
        const studentsList = studentsSnapshot.docs.map(doc => ({
          uid: doc.id,
          ...doc.data() as Omit<UserDetails, 'uid'>,
        })) as UserDetails[];

        const filteredStudents = studentsList.filter(student => student.classes && student.classes[selectedCourse]);

        setStudents(filteredStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }
  };

  useEffect(() => {
    refreshStudents();
  }, [selectedCourse, db]);

  const filteredStudents = students.filter(student => student.classes && student.classes[selectedCourse]);

  // Get course number and title using the selectedCourse ID
  const selectedCourseDetails = userDetails?.classes ? userDetails.classes[selectedCourse] : null;
  const selectedCourseDisplay = selectedCourseDetails ? `${selectedCourseDetails.number} - ${selectedCourseDetails.title}` : selectedCourse;

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
      {userDetails?.classes && Object.keys(userDetails.classes).length > 1 && (
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          {Object.entries(userDetails.classes).map(([courseId, course]) => (
            <Button
              key={courseId}
              variant={selectedCourse === courseId ? 'contained' : 'outlined'}
              onClick={() => handleCourseChange(courseId)}
            >
              {`${course.number}`}
            </Button>
          ))}
        </Stack>
      )}
      <>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Manage Course Details
        </Typography>
        <EditCourseDetails
          selectedCourse={selectedCourse}
          selectedCourseDetails={selectedCourseDetails}
          onCourseUpdate={refreshStudents} // Refresh students after edit
        />
        <DeleteCourse
          selectedCourse={selectedCourse}
          onCourseDelete={() => {
            setSelectedCourse(''); // Reset selected course
            refreshStudents(); // Refresh after deletion
          }}
        />
      </>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Students Enrolled in '{selectedCourseDisplay}' Course
      </Typography>
      {filteredStudents.length === 0 ? (
        <Typography>No students enrolled in {selectedCourseDisplay}.</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>User ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Last Login</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.uid}>
                    <TableCell>{student.uid}</TableCell>
                    <TableCell>{student.lastLogin ? new Date(student.lastLogin.seconds * 1000).toLocaleString() : 'No data available'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ExportToCSV students={filteredStudents} selectedCourse={selectedCourse} />
        </>
      )}
      <CourseStudentManagement 
        selectedCourse={selectedCourse} 
        selectedCourseDetails={selectedCourseDetails}
        onStudentChange={refreshStudents} 
      />
    </Box>
  );
};

export default CourseManagement;