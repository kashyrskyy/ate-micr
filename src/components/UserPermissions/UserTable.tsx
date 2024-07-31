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
  class?: string[];
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
                  <Chip label="Educator (Admin)" color="primary" />
                ) : (
                  <Chip label="Student (Regular)" />
                )}
              </TableCell>
              <TableCell>{user.lastLogin ? user.lastLogin.toDate().toLocaleString() : 'No data available'}</TableCell>
              <TableCell>{user.class ? user.class.join(', ') : 'None'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;