import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const userInfoFromStorage: object = webStorageClient.get(constants.USER_INFO);
const accessTokenFromStorage = webStorageClient.getToken();

interface AuthSlickInterface {
  userInfo: any;
  access_token: any;
}

const initialState: AuthSlickInterface = {
  userInfo: userInfoFromStorage || null,
  access_token: accessTokenFromStorage || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    actionLogin: (state, action) => {
      state.userInfo = action.payload;
      webStorageClient.set(constants.USER_INFO, action.payload);
    },
  },
});

export const { actionLogin } = authSlice.actions;

export default authSlice.reducer;
