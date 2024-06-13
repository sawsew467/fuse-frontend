import { constants } from "@/settings";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StudyRoomTabStateControll {
    isHome: boolean;
    isVideoCall: boolean;
    isMusicCall: boolean;
    isChat: boolean;
    isAlarm: boolean;
    isSetting: boolean;
}

interface StudyRoomMainControll {
    tabState:StudyRoomTabStateControll,
}



const initialState: StudyRoomMainControll = {
    tabState: {
        isHome: false,
        isVideoCall: true,
        isMusicCall: false,
        isChat: false,
        isAlarm: false,
        isSetting: false
    }   
}

type UpdateTabStatePayload = {
    field: keyof StudyRoomTabStateControll;
    value: boolean;
}

export const studyControllSlice = createSlice({
    name: 'studyController',
    initialState,
    reducers: {
        updateTabState: (state, action: PayloadAction<UpdateTabStatePayload>) => {
            const { field, value } = action.payload;
            state.tabState[field] = value;
        }
    }
})

export const {updateTabState} = studyControllSlice.actions;
export default studyControllSlice.reducer;