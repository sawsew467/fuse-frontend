import { configureStore } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import studyRoomController from "./slices/studyRoomController";

export const store = configureStore({
  reducer: { auth: auth, studyRoomController: studyRoomController},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
