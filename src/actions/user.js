import UserService from "../services/userService";
import {EDIT_DETAILS, GET_EMPLOYEES, DELETE_USER,SEARCH_USER, ADD_NEW_USER } from './actionTypes'

export const getUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAll();
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data.results,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const searchUser = (searchTerm) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_USER,
      payload: searchTerm,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};


export const editUser = (data, id) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_DETAILS,
      payload: {data, id},
    });
  } catch (err) {
    return Promise.reject(err);
  }
};


export const addUser = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_USER,
      payload: data,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

