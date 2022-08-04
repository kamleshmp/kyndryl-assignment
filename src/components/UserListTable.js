import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, TextField, Grid } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
const UserListTable = (props) => {
  const { employees, handleEditUser, handleDeleteUser } = props;

  const tableBody = () => {
    return employees.map((row, index) => (
      <TableRow
        key={index}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name.first}
        </TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.gender}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.location.city}</TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleEditUser(row);
            }}
          >
            Edit
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button
            variant="outlined"
            color="secondary"
            onClick={(e) => {
              handleDeleteUser(row.id.value);
            }}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableBody()}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserListTable;
