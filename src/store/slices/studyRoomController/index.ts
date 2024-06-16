import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CurrentMedia {
  video: string;
  audio: string;
}

interface AudioState {
  volume: number;
  muted: boolean;
  device: string;
}

interface StudyRoomControllerState {
  currentMedia: CurrentMedia;
  audio: AudioState;
}

const initialState: StudyRoomControllerState = {
  currentMedia: {
    video: "",
    audio: "",
  },
  audio: {
    volume: 1,
    muted: false,
    device: "",
  },
};

export const studyRoomControllerSlice = createSlice({
  name: "studyRoomController",
  initialState,
  reducers: {
    actionSetCurrentMedia: (state, action: PayloadAction<CurrentMedia>) => {
      state.currentMedia = action.payload;
    },
    actionSetAudio: (state, action: PayloadAction<AudioState>) => {
      state.audio = action.payload;
    },
  },
});

export const { actionSetCurrentMedia, actionSetAudio } =
  studyRoomControllerSlice.actions;

export default studyRoomControllerSlice.reducer;
