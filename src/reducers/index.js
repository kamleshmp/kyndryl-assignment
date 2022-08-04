import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import users from './user';
const rootReducer = combineReducers({
  users,
  form: reducerForm,
});
export default rootReducer;
