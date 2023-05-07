import { createSlice } from "@reduxjs/toolkit";

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
        startDate: undefined,
        endDate: undefined,
        key: "selection",
      },
    ],
  },
  reducers: {
    updateDestination: (state, action) => {
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
