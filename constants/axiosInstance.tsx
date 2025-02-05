import axios from "axios";

export const baseURL = `https://wspace-backend-plqt.vercel.app/api/`;
// export const imageURL = `https://${dynamicUrl}`;

export const apiBase = axios.create({
  baseURL,
});

// Create an Axios instance
const api = axios.create({
  baseURL,
});

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `TOKEN ${token}`;
    api.interceptors.response.use(
      (response) => {
        // Return the response if it's successful
        return response;
      },
      (error) => {
        // Check if the error response status is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
          window.location.href = "/";
        }
        // Return a rejected promise to continue the error handling chain
        return Promise.reject(error);
      }
    );
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
// Function to set up the interceptor for handling unauthorized responses
export const setupInterceptors = () => {
  api.interceptors.response.use(
    (response) => {
      // Return the response if it's successful
      return response;
    },
    (error) => {
      // Check if the error response status is 401 (Unauthorized)
      if (error.response && error.response.status === 401) {
        window.location.href = "/login";
      }
      // Return a rejected promise to continue the error handling chain
      return Promise.reject(error);
    }
  );
};

export default api;
