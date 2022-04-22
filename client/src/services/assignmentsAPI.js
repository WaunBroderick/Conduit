import axiosInstance from "./api-interceptor";

export const getAssignments = () =>
  axiosInstance.get(`/assignments`).then((res) => res.data);

export const getUserAssignments = (id) =>
  axiosInstance.get(`/assignments/user=${id}`).then((res) => res.data);

export const getDepartment = (id) =>
  axiosInstance.get(`/departments/${id}`).then((res) => res.data);

export const updateDepartment = ({ id, ...updatedDepartment }) =>
  axiosInstance
    .put(`/departments/${id}`, updatedDepartment)
    .then((res) => res.data);

export const createDepartment = ({ ...createdDepartment }) =>
  axiosInstance.post(`/departments`, createdDepartment).then((res) => res.data);
