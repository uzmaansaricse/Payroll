import { apiConnector } from "../apiconnector";
import { authEndpoints } from "../apis";

export const adminLogin = async (userdata) => {
    try {
       
        const response = await apiConnector("POST", authEndpoints.ADMIN_LOGIN,userdata);
        return response?.data; // Assuming the response contains the user data
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}