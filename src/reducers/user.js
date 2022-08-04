import {
  GET_EMPLOYEES,
  EDIT_DETAILS,
  DELETE_USER,
  SEARCH_USER,
  ADD_NEW_USER,
} from '../actions/actionTypes';

const deleteUser = (employees, id) => {
  return employees.filter((obj) => obj.id.value !== id);
};

const toLower = (value = '') => {
  return value.toString().toLowerCase();
};

const searchUser = (employees, searchTerm) => {
  return employees.filter(
    (obj) =>
      toLower(obj.gender).includes(searchTerm) ||
      toLower(obj.email).includes(searchTerm) ||
      toLower(obj.name.first).includes(searchTerm)
  );
};

const editUser = (employees, payload) => {
  const { phone, email, name, city } = payload.data;
  return employees.map((emp) => {
    if (emp.id.value === payload.id) {
      return {
        ...emp,
        phone,
        email,
        name: {
          ...emp.name,
          first: name,
        },
        location: {
          ...emp.location,
          city: city,
        },
      };
    }
    return emp;
  });
};
const addUser = (state, payload) => {
  const { email, phone, name, city } = payload;
  const newUser = {
    email: email,
    phone: phone,
    name: {
      first: name,
    },
    location: {
      city,
    },
    id: {
      value: +new Date(),
    },
  };
  state.employees.unshift(newUser);
  return state;
};

const employee = (
  state = {
    employees: [],
    allEmployess: [],
  },
  action
) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        allEmployess: action.payload,
      };
    case EDIT_DETAILS:
      return {
        ...state,
        employees: editUser(state.employees, action.payload),
      };

    case DELETE_USER:
      return {
        ...state,
        employees: deleteUser(state.employees, action.payload),
      };

    case SEARCH_USER:
      return {
        ...state,
        employees: searchUser(state.allEmployess, action.payload),
      };

    case ADD_NEW_USER:
      return {
        ...state,
        ...addUser(state, action.payload),
      };
    default:
      return state;
  }
};

export default employee;
