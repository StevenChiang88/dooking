import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const orderApi = createApi({
  reducerPath: "orderApi", //Api的名稱，不能重複
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dooking-server.onrender.com/api/",
  }), //發送請求使用的工具
  endpoints(build) {
    // endpoints 用來指定Api中的功能，是一個函式，需要一個物件作為return
    return {
      //前面是命名，後面是透過build來設定請求

      addOrder: build.mutation({
        query(data) {
          return {
            url: "order",
            method: "post",
            body: data,
          };
        },
      }),
      getOrder: build.query({
        query() {
          return "order";

          //query設定請求的子路徑
        },
      }),
    };
  },
});

export const { useAddOrderMutation, useGetOrderQuery } = orderApi;

export default orderApi;
