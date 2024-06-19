import { GraduationCap, Mail, Medal, University, UserRoundSearch } from 'lucide-react'
import React from 'react'

function RightSection() {
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col mb-4'>
                <div className='flex gap-2'>
                    <Mail />
                    <h3 className='font-semibold'>Email</h3>
                </div>
                <p className=''>thangtvb.dev@gmail.com</p>
            </div>
            <div className='flex flex-col mb-4'>
                <div className='flex gap-2'>
                    <Medal />
                    <h3 className='font-semibold'>Chuyên ngành</h3>
                </div>
                <p className=''>Kĩ thuật phần mềm</p>
            </div>
            <div className='flex flex-col mb-4'>
                <div className='flex gap-2'>
                    <University />
                    <h3 className='font-semibold'>Học kỳ</h3>
                </div>
                <p className=''>Kỳ chuyên ngành 7</p>
            </div>
            <div>
                <div className='flex gap-2'>
                    <UserRoundSearch />
                    <h3 className='font-semibold '>Mô tả bản thân:</h3>
                </div>
                <p className=''>Hi 👋, I am ThangTVB. A software engineer passionate developer from Vietnam</p>
            </div>
        </div>
    )
}

export default RightSection