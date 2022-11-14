// userDetailSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../userActions/userAction";
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;
console.log("userToken:", userToken);
const initialState = {
  loading: true,
  userToken,
  firstName: null,
  lastName: null,
  error: null,
};

const userDetailSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserProfile.pending]: (state) => {
      state.loading = true;
      state.firstName = null;
      state.lastName = null;
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.firstName = payload.body.firstName;
      state.lastName = payload.body.lastName;
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
  },
});
export default userDetailSlice.reducer;
