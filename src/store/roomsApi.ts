import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const roomsApi = createApi({
  reducerPath: "roomsApi", //Api的名稱，不能重複
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dooking-server.onrender.com/api/rooms/",
  }), //發送請求使用的工具
  endpoints(build) {
    // endpoints 用來指定Api中的功能，是一個函式，需要一個物件作為return
    return {
      //前面是命名，後面是透過build來設定請求

      updateRoomAvailableDate: build.mutation({
        query(data) {
          return {
            url: `unavailable/${data.id}`,
            method: "put",
            body: data.dates,
          };
        },
      }),
    };
  },
});

export const { useUpdateRoomAvailableDateMutation } = roomsApi;

export default roomsApi;
