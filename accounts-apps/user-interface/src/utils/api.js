import axios from 'axios';

const DEFAULT_BASE_URL = 'http://test.com';


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || DEFAULT_BASE_URL,
});


export const getRequest = url => axiosInstance.get(url);
export const postRequest = (url, data) => axiosInstance.post(url, { ...data});
export const putRequest = (url, data) => axiosInstance.put(url, { ...data});
export const patchRequest = (url, data) => axiosInstance.patch(url, { ...data });
export const deleteRequest = (url, data) => axiosInstance.delete(url);

export default axiosInstance;
