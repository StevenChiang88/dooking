import { configureStore } from "@reduxjs/toolkit";
import hotelApi from "./hotelApi";
import { searchSlice } from "./reducer/searchSlice";
import { authSlice } from "./reducer/authSlice";
import authApi from "./authApi";
import roomsApi from "./roomsApi";
import orderApi from "./orderApi";
const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    auth: authSlice.reducer,

    [hotelApi.reducerPath]: hotelApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hotelApi.middleware)
      .concat(authApi.middleware)
      .concat(roomsApi.middleware)
      .concat(orderApi.middleware),
});

export default store;
