import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"search",
    initialState:{
        destination: "",
        detail:
            {
                adult: 1,
                child: 0,
                room: 1,
              },
              date:[
                {
                  startDate: new Date(),
                  endDate: new Date(),
                  key: "selection",
                }]
    },
    reducers:{
        updateDestination:(state,action)=>{
            state.destination = action.payload.destination
        },
        updatedDetail:(state,action)=>{
            state.detail =action.payload.detail
        },
        updateDate:(state,action)=>{
            state.date =action.payload.date
        }
    }
})

export const {updateDate,updatedDetail,updateDestination} = searchSlice.actions