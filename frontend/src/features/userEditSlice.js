import { createSlice } from "@reduxjs/toolkit";
import { editUser } from "../userActions/userAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  firstName: null,
  lastName: null,
  userToken,
  error: null,
  success: false,
};

const editUserSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {},
  extraReducers: {
    [editUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.userToken = userToken;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.firstName = payload.body.firstName;
      state.lastName = payload.body.lastName;
      state.userToken = userToken;
      state.success = true;
    },
    [editUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default editUserSlice.reducer;
