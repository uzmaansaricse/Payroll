import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    email: null,
    permissions: [],
  },
  reducers: {
    loginSuccess: (state, action) => {
        console.log("Login Success Action Payload:", action
        );
      state.token = action.payload.token;
      state.email = action.payload.email;
        state.permissions = action.payload.permissions || [];
    },
    logout: (state) => {
      state.token = null;
      state.email = null;
      state.permissions = [];   
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
