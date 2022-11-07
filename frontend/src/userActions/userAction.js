import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        config
      );

      localStorage.setItem("userToken", data.userToken);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// userDetail.js
export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { login } = getState();
      console.log("login:", login);
      console.log("loginToken:", login.userToken);

      const config = {
        headers: {
          Authorization: `Bearer ${login.userToken}`,
        },
      };
      const { dataProfile } = await axios.post(
        ` http://localhost:3001/api/v1/user/profile`,
        config
      );

      return dataProfile;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
