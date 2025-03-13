import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://nodejs-backend-tutorials.onrender.com/api',
    timeout: 1000,
});



export default axiosInstance;