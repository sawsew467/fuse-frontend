import { configureStore } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import studyRoom from './slices/studyroom'

export const store = configureStore({
  reducer: { auth: auth, studyRoom: studyRoom},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
