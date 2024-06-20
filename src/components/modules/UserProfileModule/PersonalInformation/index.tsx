import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function PersonalInformation() {
    return (
        <div>
            <div className='flex flex-row gap-4 justify-around'>
                <div className='flex flex-col items-center'>
                    <Image
                        src="/avatar_image/Thắng_avatar.svg"
                        alt='avatar'
                        width={150}
                        height={10}
                        className='aspect-square object-cover rounded-lg'
                    />
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row gap-1 justify-center items-center'>
                            <h5 className='text-2xl font-bold'>Trần Văn Bảo Thắng</h5>
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
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-1'>
                        <h3 className='font-semibold'>Email:</h3>
                        <p >thangtvb.dev@gmail.com</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <h3 className='font-semibold'>Chuyên ngành:</h3>
                        <p >Kĩ thuật phần mềm</p>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <h3 className='font-semibold'>Học kỳ:</h3>
                        <p >Kỳ chuyên ngành 7</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Mô tả bản thân</h3>
                        <p className=''>Hi 👋, I am ThangTVB. A software engineer passionate developer from Vietnam</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3></h3>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation