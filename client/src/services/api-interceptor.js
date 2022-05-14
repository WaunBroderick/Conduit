// api-interceptor.js
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

// AuthCookie
//const [cookies] = useCookies(["authCookie"]);
//const token = cookies.authCookie;

const authCookie = () => {
  const [cookies] = useCookies(["authCookie"]);
  const token = cookies.authCookie;
  return token;
};

// axios instance for making requests
export const axiosInstanceNoJWT = axios.create({
  baseURL: "http://localhost:5000/",
});

// axios instance for making requests
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

// Custom toasts for success and rejects
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response;
    }
    if (response.status === 201) {
      toast.success(`Resource Created`, {
        position: "top-center",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }
    return response;
  },
  function (error) {
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

    if (error.response.status === 404) {
      toast.error("Route not Found", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }

    if (error.response.status === 423) {
      toast.error("Resource Not Accessible", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }

    if (error.response.status === 409) {
      toast.error("Resource Conflict, please rename your request", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

export const ToastSuccess = (response) => {
  if (response === 200) {
    return response;
  }
  if (response === 201) {
    toast.success(`Resource Created`, {
      position: "top-center",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }
  return response;
};
export const ToastError = (error) => {
  if (error.graphQLErrors[0].extensions.code == 500) {
    toast.error(`${error.graphQLErrors[0].extensions.code}`, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }
  if (error.graphQLErrors[0].extensions.code == 401) {
    toast.error("Unauthorized", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }

  if (error.graphQLErrors[0].extensions.code == 404) {
    toast.error("Route not Found", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }

  if (error.graphQLErrors[0].extensions.code == 423) {
    toast.error("Resource Not Accessible", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }

  if (error.graphQLErrors[0].extensions.code === 409) {
    toast.error("Resource Conflict, please rename your request", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  }

  //return Promise.reject(error);
  return error;
};
