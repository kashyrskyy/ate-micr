// src/components/UserTable.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';

interface User {
  id: string;
  isAdmin: boolean;
  isSuperAdmin?: boolean;
  lastLogin?: {
    toDate: () => Date;
  };
  classes?: Record<string, { number: string; title: string; isCourseAdmin?: boolean }>; // Update type for classes
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Login</TableCell>
            <TableCell>Courses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                {user.isSuperAdmin ? (
                  <Chip label="Super Admin" color="secondary" />
                ) : user.isAdmin ? (
                  <Chip label="Educator" color="primary" />
                ) : (
                  <Chip label="Student" />
                )}
              </TableCell>
              <TableCell>
                {user.lastLogin ? user.lastLogin.toDate().toLocaleString() : 'No data available'}
              </TableCell>
              <TableCell>
                {user.classes
                  ? Object.entries(user.classes).map(([courseId, course]) => (
                      <Chip
                        key={courseId}
                        label={`${course.isCourseAdmin ? '[Course Admin] ' : ''}${course.number} - ${course.title}`}
                        style={{
                          backgroundColor: course.isCourseAdmin ? '#ffcccb' : '#d4edda', // Light red for admin, light green for non-admin
                          color: course.isCourseAdmin ? '#b71c1c' : '#155724', // Dark red text for admin, dark green text for non-admin
                          margin: '4px',
                        }}
                      />
                    ))
                  : 'None'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;