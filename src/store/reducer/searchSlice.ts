import { createSlice } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/dist/query";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    destination: null,
    detail: {
      adult: 1,
      child: 0,
      room: 1,
    },
    date: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
  },
  reducers: {
    updateDestination: (state, action) => {
      console.log(action.payload.destination, "reducer內");
      state.destination = action.payload.destination;
    },
    updateDetail: (state, action) => {
      state.detail = action.payload.detail;
    },
    updateDate: (state, action) => {
      state.date = action.payload.date;
    },
  },
});

export const { updateDate, updateDetail, updateDestination } =
  searchSlice.actions;
