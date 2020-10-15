// import axios from 'axios'
// // import * as React from 'react';

// const api = axios.create({
//   baseURL: API_URL,
//   timeout: 3000,
// });

// export const setAuthToken = () => {
//   if (localStorage.getItem('token')) {
//     api.defaults.headers.common['Authorization'] = localStorage.getItem(
//       'token',
//     );
//   } else {
//     delete api.defaults.headers.common['Authorization'];
//   }
// };

// export default api;


import axios from "axios";

export * from './request';

export const baseURL = process.env.REACT_APP_BASE_URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
  },
});

//  This adds a token before all the requests.
// https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
const addTokenToRequest = (request:any) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return request;
};

axiosInstance.interceptors.request.use(addTokenToRequest);



export default axiosInstance;
