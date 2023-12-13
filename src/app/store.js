import { configureStore } from "@reduxjs/toolkit";
import laptopSliceReducer from "../components/Laptop/laptopSlice";
import mobileSliceReducer from "../components/Mobile/mobileSlice";
import usersSliceReducer from "../components/users/usersSlice";

const store = configureStore({
  reducer: {
    laptop: laptopSliceReducer,
    mobile: mobileSliceReducer,
    users: usersSliceReducer,
  },
});

export default store;
