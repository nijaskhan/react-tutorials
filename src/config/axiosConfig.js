import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://nodejs-backend-tutorials.onrender.com/api',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('@token'))}`,
        'Accept': 'application/json'
    }
});

export default axiosInstance;