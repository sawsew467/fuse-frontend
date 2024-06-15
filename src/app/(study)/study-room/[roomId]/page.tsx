import StudyRoomModule from '@/components/modules/StudyRoomModule'
import React from 'react'

type TProps = {
    params: {
        roomId: string;
    }
}

function StudyRoom({params}:TProps) {
    return (
        <StudyRoomModule/>
    )
}

export default StudyRoom
