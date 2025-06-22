//const BASE_URL = "http://localhost:4000/api/v1"
const BASE_URL = "https://payroll-gujd.onrender.com/api"

// AUTH ENDPOINTS/admins/login
export const authEndpoints = {
  ADMIN_LOGIN: BASE_URL + "/admin/login",
};

export const companyEndpoints = {
  GET_COMPANIES_LIST: BASE_URL + "/superadmin/companies",

}

