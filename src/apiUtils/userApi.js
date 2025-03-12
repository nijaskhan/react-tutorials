import axiosInstance from "../config/axiosConfig";

export const userLogin = async (payload) => {
    const { email, password } = payload;
    if (email && password) {
        const result = await axiosInstance.post('/userLogin', payload);
        console.log("result from axiosInstanceL: ", result);

        return {
            success: true,
            message: 'Login successful',
            user: result.data
        }
    } else {
        return {
            success: false,
            message: 'Please provide email and password'
        }
    }
}