import { companyEndpoints } from "../apis";

export const FetchCompaniesList = async () => {
  try {
    const response = await apiConnector(
      "get",
      companyEndpoints.GET_COMPANIES_LIST
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching companies list:", error);
    throw error;
  }
}