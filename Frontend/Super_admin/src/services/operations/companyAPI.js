import { apiConnector } from "../apiconnector";
import { companyendpoints, superadminendpoints } from "../apis";

export async function registerCompany(companydata) { 
   try {
      const res = await apiConnector("POST",superadminendpoints.COMPANY_REGISTER,companydata)
      return res.data;
      
    } catch (err) {
      console.log("Error in registering company",err);
    }
}

 export async function fetchCompaniesList() {
    try {
      const res = await apiConnector("GET",superadminendpoints.COMPANY_LIST)
      return res;
    } catch (error) {""
      console.error("Error fetching companies:", error);
    } 
  };

  export async function fetchSubSuperAdmins (){
      try{
        const response = await apiConnector("GET",superadminendpoints.SUB_ADMIN_LIST);
        return response?.data?.data;
      }catch(error){
        console.log("error in fetching",error);
      }
    }

      export async function editSubSuperAdmins (data){
      try{
        const response = await apiConnector("GET",superadminendpoints.SUB_ADMIN_LIST,data);
        console.log(response);
        return response;
      }catch(error){
        console.log("error in fetching",error);
      }
    }

      export async function MakeSubSuperAdmins (data){
      try{
        const response = await apiConnector("POST",superadminendpoints.SUB_ADMIN_REGISTER,data);
        return response?.data?.data;
      }catch(error){
        console.log("error in fetching",error);
      }
    }

    export async function updateCompanyPermissions(companyName,permissions) {
  try {
    console.log("Updating permissions for company:", companyName, "with permissions:", permissions);
    const response = await apiConnector("POST", companyendpoints.COMPANY_PERMISSIONS_UPDATE, {companyName, permissions});

    console.log("Response from updateCompanyPermissions:", response);
    return response?.data;
  } catch (error) {
    console.log("Error updating company permissions:", error);
  }
}