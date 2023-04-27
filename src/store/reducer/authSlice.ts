import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token) {
      return {
        isLogged: false,
        token: null,
        user: null,
      };
    }

    return {
      isLogged: true,
      token: token,
      user: user,
    };
  },
  reducers: {
    loginReducer: (state, action) => {
      state.isLogged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logoutReducer: (state, action) => {
      state.isLogged = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { loginReducer, logoutReducer } = authSlice.actions;
