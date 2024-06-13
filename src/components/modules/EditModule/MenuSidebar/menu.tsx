import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MenuSideBar() {
    return (
        <div className='flex flex-col row-start-1 row-end-3 p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
            <div className='flex flex-row gap-2 pb-5'>
                <Image
                    src="/avatar.svg"
                    alt='avatar'
                    width={64}
                    height={64}
                />
                <div className='col-span-3 flex flex-col justify-center'>
                    <h5>Nguyễn Văn Duy Khang</h5>
                    <span>@khangnguyen</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Button className='w-full' haveOverlay>
                    <Link href="/edit-page/editProfile">
                        <span>Hồ sơ</span>
                    </Link>
                </Button>
                <Button className='w-full bg-secondary' haveOverlay>
                    <span>Thông báo</span>
                </Button>
                <Button className='w-full bg-secondary' haveOverlay>
                    <Link href="">
                        <span>Cài đặt</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default MenuSideBar