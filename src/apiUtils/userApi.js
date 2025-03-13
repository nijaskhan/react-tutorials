import axiosInstance from "../config/axiosConfig";

export const userLogin = async (payload) => {
    const { email, password } = payload;
    if (email && password) {
        const result = await axiosInstance.post('/userLogin', payload, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('@token'))}`,
                'Accept': 'application/json'
            }
        });

        return result?.data;
    } else {
        return false;
    }
}

export const getUsers = async () => {
    try {
        const result = await axiosInstance.get('/getUsers', {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('@token'))}`,
                'Accept': 'application/json'
            }
        });
        console.log("result: ", result);
        return result?.data;
    } catch (err) {
        return false;
    }
}