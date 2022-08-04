import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Grid } from '@material-ui/core';
import '../css/userList.css';
import {
  getUsers,
  deleteUser,
  searchUser,
  editUser,
  addUser,
} from '../actions/user';
import CustomSearch from '../hooks/CustomSearch';
import UserDetailModal from '../components/UserDetailModal';
import UserListTable from '../components/UserListTable';

const UserList = () => {
  const { employees } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [isNewUser, SetIsNewUser] = useState({});
  const searchValue = CustomSearch(searchTerm);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    dispatch(searchUser(searchValue));
  }, [searchValue]);

  const handleEditUser = (user) => {
    setOpenModal(true);
    setUserDetail(user);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const closeModel = () => {
    setUserDetail({});
    setOpenModal(false);
  };

  const handleEdit = (data, id) => {
    dispatch(editUser(data, id));
    closeModel();
  };

  const addNew = () => {
    setOpenModal(true);
    setUserDetail({ name: {} });
    SetIsNewUser(true);
  };

  const handleAddUser = (data) => {
    dispatch(addUser(data));
    closeModel();
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" className="add-new-btn" onClick={addNew}>
            Add New
          </Button>
          <TextField
            onChange={handleSearch}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            style={{ float: 'right' }}
          />
        </Grid>
      </Grid>

      <UserListTable
        employees={employees}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      <UserDetailModal
        open={openModal}
        userDetail={userDetail}
        closeModel={closeModel}
        handleEdit={handleEdit}
        handleAddUser={handleAddUser}
        isNewUser={isNewUser}
      />
    </>
  );
};

export default UserList;
