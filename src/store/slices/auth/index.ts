import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage: object = webStorageClient.get(constants.USER_INFO);
const accessTokenFromStorage = webStorageClient.getToken();

interface AuthSlickInterface {
  userInfo: any;
  access_token: any;
  isAuth: boolean;
}

const initialState: AuthSlickInterface = {
  userInfo: userInfoFromStorage || null,
  access_token: accessTokenFromStorage || null,
  isAuth: !!userInfoFromStorage || false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.userInfo = action.payload;
      webStorageClient.set(constants.USER_INFO, action.payload);
    },
    actionSetIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { actionLogin, actionSetIsAuth } = authSlice.actions;

export default authSlice.reducer;
