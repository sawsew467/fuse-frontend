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
                <Button className='' haveOverlay>
                    <Link href="/settings/edit-profile">
                        <span>Hồ sơ</span>
                    </Link>
                </Button>
                <Button className='bg-secondary' haveOverlay>
                    <Link href="/settings/setting-account">
                        <span>Cài đặt</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default DashBoard