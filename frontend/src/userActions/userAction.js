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

      localStorage.setItem("userToken", data.body.token);
      console.log("data:", data);
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
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;
export const getUserProfile = createAsyncThunk(
  "user/profile",

  async (arg, { getState, rejectWithValue }) => {
    try {
      const { login } = getState();
      console.log("login:", login);
      console.log("loginToken:", login.userToken);

      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      const { data } = await axios.post(
        ` http://localhost:3001/api/v1/user/profile`,
        {},
        config
      );

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
// userEdit.js
export const editUser = createAsyncThunk(
  "user/profile",
  async (arg, { getState, userFirstName, userLastName, rejectWithValue }) => {
    try {
      const { userDetails } = getState();
      console.log("userDetails:", userDetails);

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const { data } = await axios.put(
        ` http://localhost:3001/api/v1/user/profile`,
        { firstName: userFirstName, lastName: userLastName },
        config
      );

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
