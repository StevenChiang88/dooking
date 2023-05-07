import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const authApi = createApi({
  reducerPath: "authApi", //Api的名稱，不能重複
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dooking-server.onrender.com/api/auth/",
  }), //發送請求使用的工具
  endpoints(build) {
    // endpoints 用來指定Api中的功能，是一個函式，需要一個物件作為return
    return {
      //前面是命名，後面是透過build來設定請求
      login: build.mutation({
        query(user) {
          return {
            url: "login",
            method: "post",
            body: user,
          };
        },
      }),
      regiser: build.mutation({
        query(user) {
          return {
            url: "register",
            method: "post",
            body: user,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegiserMutation } = authApi;

export default authApi;
