import React from 'react'

function StudyRoomMainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-screen h-screen'>
            {children}
        </div>
    )
}

export default StudyRoomMainLayout;
