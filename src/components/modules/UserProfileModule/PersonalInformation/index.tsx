import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function PersonalInformation() {
    return (
        <div className='flex flex-row gap-4 justify-center'>
            <Image
                src="/avatar_image/Khang_avatar.png"
                alt='avatar'
                width={150}
                height={10}
                className='aspect-square object-cover rounded-lg'
            />
            <div className='flex flex-col justify-center'>
                <h5 className='text-2xl font-bold'>Nguyễn Văn Duy Khang</h5>
                <div className='flex flex-row gap-2 '>
                    <Cake className=''/>
                    <p>03/02/2004</p>
                </div>
                <div className='flex flex-row gap-2 '>
                    <GraduationCap className=''/>
                    <p>03/02/2004</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation