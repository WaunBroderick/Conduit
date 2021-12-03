// api-interceptor.js
import axios from "axios";
import { toast } from "react-toastify";

const errorHandler = (error) => {
  if (error.response.status === 500) {
    toast.error(`${error.response.data.detail}`, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }
  if (error.response.status === 401) {
    toast.error("Unauthorized", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }

  return Promise.reject(error);
};

// axios instance for making requests
const axiosInstance = axios.create();

// response interceptor for handling common errors (e.g. HTTP 500)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);

export default axiosInstance;
