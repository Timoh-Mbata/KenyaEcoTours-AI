// src/store/index.js
import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, 
});

export default apiClient;

