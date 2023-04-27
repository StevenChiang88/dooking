import { configureStore } from "@reduxjs/toolkit";
import hotelApi from "./hotelApi";
import { searchSlice } from "./reducer/searchSlice";
import { authSlice } from "./reducer/authSlice";
import authApi from "./authApi";
const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    auth: authSlice.reducer,

    [hotelApi.reducerPath]: hotelApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hotelApi.middleware)
      .concat(authApi.middleware),
});

export default store;
