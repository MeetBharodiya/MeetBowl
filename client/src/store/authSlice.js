import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  // activate: false,
  user: null,
  otp: {
    phone: "",
    hash: "",
  },
  // let auth = { 'token': false }
  // let activate = { 'status': false }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      if(user===null){
        state.isAuth = false;
      }
      else
      {
        state.isAuth = true;
      }
    },
    setOtp: (state, action) => {
      const { phone, hash } = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
});

export const { setAuth, setOtp } = authSlice.actions;
export default authSlice.reducer;
