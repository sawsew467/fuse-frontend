import Calendar from '@/components/modules/UserProfileModule/Achievements/calendar'
import LeftSection from '@/components/modules/UserProfileModule/PersonalInformation/leftSection'
import RightSection from '@/components/modules/UserProfileModule/PersonalInformation/rightSection'
import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Achievements() {
    return (
        <div className='flex flex-row'>
            <div className='w-fit h-fit col-start-1 col-end-2 rounded-lg border-2 border-black bg-white shadow-3d transition-all mr-4'>
                <Calendar/>
            </div>
            <div className='grow col-start-2 col-end-5 p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
                <div>right section</div>
            </div>
        </div>
    )
}

export default Achievements