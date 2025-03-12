import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('@token'),
        'Accept': 'application/json'
    }
});

export default axiosInstance;