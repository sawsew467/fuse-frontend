"use client"
import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit'
import React from 'react'
import Home from './Main/Home';
import VideoCall from './Main/VideoCall';
import MusicCall from './Main/MusicCall';
import Chat from './Main/Chat';
import Alarm from './Main/Alarm';
import Settings from './Main/Settings';

function StudyRoomModule() {
    const {tabState} = useAppSelector((state) => state.studyRoom);
    const dispatch = useAppDispatch();

    return (
        <div className='w-full h-full'>
            {tabState.isHome && <Home/>}
            {tabState.isVideoCall && <VideoCall/>}
            {tabState.isMusicCall && <MusicCall/>}
            {tabState.isChat && <Chat/>}
            {tabState.isAlarm && <Alarm/>}
            {tabState.isSetting && <Settings/>}
        </div>
    )
}

export default StudyRoomModule
