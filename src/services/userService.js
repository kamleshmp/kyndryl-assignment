import http from './http-common';
const getAll = () => {
  return http.get('/?results=10');
};
const get = (id) => {
  return http.get(`/tutorials/${id}`);
};
const create = (data) => {
  return http.post('/tutorials', data);
};
const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/tutorials/${id}`);
};

const UserService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default UserService;
