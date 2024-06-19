import { Cake, GraduationCap, Mail, Medal, University, UserRoundSearch } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function RightSection() {
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center mb-3'>
                <div className='flex flex-row gap-1 '>
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
            </div>
            <div className='flex flex-row gap-32 mb-3'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2 '>
                        <Cake className='' />
                        <p className='font-semibold'>03/02/2004</p>
                    </div>
                    <div className='flex flex-row gap-2 '>
                        <GraduationCap className='' />
                        <p className='font-semibold'>DE170145</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <Mail />
                            <p className='font-semibold'>thangtvb.dev@gmail.com</p>
                            {/* <h3 className=''>Email</h3> */}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <Medal />
                            <p className='font-semibold'>Kĩ thuật phần mềm</p>
                            {/* <h3 className=''>Chuyên ngành</h3> */}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <University />
                            <p className='font-semibold'>Kỳ chuyên ngành 7</p>
                            {/* <h3 className=''>Học kỳ</h3> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-2'>
                    <UserRoundSearch />
                    <h3 className='font-semibold '>Mô tả bản thân:</h3>
                </div>
                <p className='w-full h-20'>Hi 👋, I am ThangTVB. A software engineer passionate developer from Vietnam</p>
            </div>
        </div>
    )
}

export default RightSection