import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import userDetailReducer from "./features/userDetailsSlice";
import userEditReduceur from "./features/userEditSlice";
const store = configureStore({
  reducer: {
    login: userReducer,
    userDetails: userDetailReducer,
    editUser: userEditReduceur,
  },
});

export default store;
