import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DashBoard() {
    return (
        <div className='flex flex-col '>
            <div className='flex flex-row gap-2 pb-5'>
                <Image
                    src="/avatar.svg"
                    alt='avatar'
                    width={64}
                    height={64}
                />
                <div className='flex flex-col justify-center '>
                    <h5>Nguyễn Văn Duy Khang</h5>
                    <span>@khangnguyen</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Button className='' haveOverlay>
                    <Link href="">
                        <span>Hồ sơ</span>
                    </Link>
                </Button>
                {/* <Button className='w-full bg-secondary' haveOverlay>
                    <span>Thông báo</span>
                </Button> */}
                <Button className='bg-secondary' haveOverlay>
                    <Link href="">
                        <span>Cài đặt</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default DashBoard