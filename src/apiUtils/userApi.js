import axiosInstance from "../config/axiosConfig";

export const userLogin = async (payload) => {
    const { email, password } = payload;
    if (email && password) {
        const result = await axiosInstance.post('/userLogin', payload);

        return result?.data;
    } else {
        return false;
    }
}

export const getUsers = async () => {
    try {
        const result = await axiosInstance.get('/getUsers');
        console.log("result: ", result);
        return result?.data;
    } catch (err) {
        return false;
    }
}