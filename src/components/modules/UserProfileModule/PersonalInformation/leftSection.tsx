import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function LeftSection() {
    return (
        <div className='flex flex-col items-center gap-4'>
            <Image
                src="/avatar_image/Thắng_avatar.svg"
                alt='avatar'
                width={150}
                height={10}
                className='aspect-square object-cover rounded-full'
            />
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-row gap-1 justify-center items-center'>
                    <h5 className='text-2xl font-bold '>Trần Văn Bảo Thắng</h5>
                    <Image
                        src="/avatar_image/male_icon.svg"
                        alt='gender_icon'
                        width={20}
                        height={20}
                    // className='absolute'
                    />
                </div>
                <span>@SawSew467</span>
                <div className='flex flex-row gap-2 '>
                    <Cake className='' />
                    <p>03/02/2004</p>
                </div>
                <div className='flex flex-row gap-2 '>
                    <GraduationCap className='' />
                    <p>DE170145</p>
                </div>
            </div>
        </div>
    )
}

export default LeftSection