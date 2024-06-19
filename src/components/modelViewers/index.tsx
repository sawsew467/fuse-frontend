"use client"
import React from 'react'

function StudyRoomMainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-screen h-screen'>
            <div className='absolute w-full h-full bg-white'></div>
            {children}
        </div>
    )
}

export default StudyRoomMainLayout;
