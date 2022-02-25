import axiosInstance from "./api-interceptor";

export const getDepartments = () =>
  axiosInstance.get(`/departments`).then((res) => res.data);

export const getDepartment = (id) =>
  axiosInstance.get(`/departments/${id}`).then((res) => res.data);

export const updateDepartment = ({ id, ...updatedDepartment }) =>
  axiosInstance
    .put(`/departments/${id}`, updatedDepartment)
    .then((res) => res.data);
