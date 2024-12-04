import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export default store;
