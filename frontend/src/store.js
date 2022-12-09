import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import userDetailReducer from "./features/userDetailsSlice";
import userEditReduceur from "./features/userEditSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, REGISTER } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  login: userReducer,
  userDetails: userDetailReducer,
  editUser: userEditReduceur,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [REGISTER],
    },
  }),
  devTools: true,
});

export default store;
