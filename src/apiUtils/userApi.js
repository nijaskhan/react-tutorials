import axiosInstance from "../config/axiosConfig";

function getHeaders() {
    return {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('@token'))}`,
        'Accept': 'application/json'
    }
}

export const userLogin = async (payload) => {
    const { email, password } = payload;
    if (email && password) {
        const result = await axiosInstance.post('/userLogin', payload, {
            headers: getHeaders()
        });

        return result?.data;
    } else {
        return false;
    }
}

export const getUsers = async () => {
    try {
        const result = await axiosInstance.get('/getUsers', {
            headers: getHeaders()
        });
        console.log("result: ", result);
        return result?.data;
    } catch (err) {
        return false;
    }
}