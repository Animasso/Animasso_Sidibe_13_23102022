import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import userDetailReducer from "./features/userDetailsSlice";
const store = configureStore({
  reducer: {
    login: userReducer,
    userDetails: userDetailReducer,
  },
});

export default store;
