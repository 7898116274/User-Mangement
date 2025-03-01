import axios from "axios";

const API_URL = "http://localhost:4000/api/users";

export const getUsers = async (search = "", page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}?search=${search}&page=${page}&limit=${limit}`);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
