import { configureStore } from "@reduxjs/toolkit";
import hotelApi from "./hotelApi";
import { searchSlice } from "./reducer/searchSlice";
const store = configureStore({
reducer:{
    search:searchSlice.reducer,
[hotelApi.reducerPath]:hotelApi.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(hotelApi.middleware)
})

export default store