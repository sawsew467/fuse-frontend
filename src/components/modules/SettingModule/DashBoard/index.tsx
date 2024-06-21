import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DashBoard() {
    return (
        <div className='flex flex-col '>
            <div className='flex flex-row gap-2 pb-5'>
                <Image
                    src="/avatar_image/Thắng_avatar.svg"
                    alt='avatar'
                    width={80}
                    height={64}
                    className='aspect-square object-cover rounded-full'
                />
                <div className='flex flex-col justify-center '>
                    <h5 className='font-semibold'>Trần Văn Bảo Thắng</h5>
                    <span>@SawSew467</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Link href="/settings/edit-profile">
                    <Button className='w-full' haveOverlay>
                        <span>Hồ sơ</span>
                    </Button>
                </Link>
                <Link href="/settings/setting-account">
                    <Button className='w-full bg-secondary' haveOverlay>
                        <span>Cài đặt</span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default DashBoard