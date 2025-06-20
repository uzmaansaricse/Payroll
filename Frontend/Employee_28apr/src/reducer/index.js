

import { combineReducers } from "@reduxjs/toolkit"
import companyReducer from "../slices/companySlice"
import userReducer from "../slices/userSlice"


const rootReducer = combineReducers({

  company: companyReducer,
  user: userReducer
  
})

export default rootReducer