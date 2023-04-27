import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const roomsApi = createApi({
  reducerPath: "hotelApi", //Api的名稱，不能重複
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800/api/",
  }), //發送請求使用的工具
  endpoints(build) {
    // endpoints 用來指定Api中的功能，是一個函式，需要一個物件作為return
    return {
      //前面是命名，後面是透過build來設定請求
      getrooms: build.query({
        query(props) {
          if (props) {
            return `hotels?city=${props.city}&min=${props.min}&max=${props.max}`;
          } else {
            return "hotels?city=台北&min=0&max=10000000";
          }

          //query設定請求的子路徑
        },
      }),
    };
  },
});

export const {} = roomsApi;

export default roomsApi;