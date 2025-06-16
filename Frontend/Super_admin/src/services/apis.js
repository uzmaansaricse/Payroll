//const BASE_URL = "http://localhost:4000/api/v1"
const BASE_URL = "http://localhost:5000/api"

// AUTH ENDPOINTS
export const superadminendpoints = {
  COMPANY_LIST: BASE_URL + "/superadmin/companies",
  COMPANY_REGISTER: BASE_URL + "/company/register",
  SUB_ADMIN_REGISTER: BASE_URL + "/sub-super-admin/register",
  SUB_ADMIN_LIST: BASE_URL + "/sub-super-admin/getall",
}
