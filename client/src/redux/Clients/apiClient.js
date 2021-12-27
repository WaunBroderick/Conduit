import axios from "axios";

const apiClient = (JWT) => {
  const { REACT_APP_API_URL } = "http://localhost:5000/";

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    responseType: "json",
    headers: { Authorization: `Bearer ${JWT}` },
  });

  return axiosInstance;
};

export default apiClient;
