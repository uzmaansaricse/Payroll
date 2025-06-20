import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";


const initialState = {
  companyName:null,
  company: [],
  totalServices: 0,
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {

    addCompanyName:(state,action)=>{

        

        const obj = action.payload.obj

        state.companyName = obj;
        
        toast.success(`${obj} set as the company name`)
    },

   addToCompany: (state, action) => {
    const service = action.payload.service; // Ensure valid payload
    if (!service ){
        toast.error("did not get service")
        return;
    }  // Avoid errors

    const index = state.company.findIndex(item => item === service);
    if (index >= 0) return; // Service already exists, do nothing

    state.company.push(service);
    state.totalServices++;

    toast.success(`${service} added to the Company`, { position: "top-right" });
},
    removeFromCompany: (state, action) => {
    const service = action.payload.service;
    if (!service) {
        toast.error("Did not get any service")
        return; // Avoid errors
    }
    const index = state.company.findIndex(item => item === service);
    if (index >= 0) {
        state.company.splice(index, 1);
        state.totalServices--;

        toast.success(`${service} removed from the Company`, { position: "top-right" });
    }
},
    resetCompany: (state) => {
      toast.success(`Cart reset`, { position: "top-right" });
    
    },
  },
})

export const { addCompanyName,addToCompany, removeFromCompany, resetCompany } = companySlice.actions

export default companySlice.reducer