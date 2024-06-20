import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function LeftSection() {
    return (
        <div className='flex flex-col gap-4'>
            <Image
                src="/avatar_image/Thắng_avatar.svg"
                alt='avatar'
                width={150}
                height={10}
                className='aspect-square object-cover rounded-full'
            />
        </div>
    )
}

export default LeftSection