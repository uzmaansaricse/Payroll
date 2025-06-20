import { apiConnector } from "../../../../Admin_28apr/src/services/apiconnector";
import { authEndpoints } from "../apis";

export const superadminLogin = async(userData)=> {
    try {
        const response = await apiConnector("POST",authEndpoints.SUPER_ADMIN_LOGIN, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in superadmin:", error);
        throw error;
    }
}