import Achievements from '@/components/modules/UserProfileModule/Achievements'
import LeftSection from '@/components/modules/UserProfileModule/PersonalInformation/leftSection'
import RightSection from '@/components/modules/UserProfileModule/PersonalInformation/rightSection'
import { Cake, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function PersonalInformation() {
    return (
        <div className='flex flex-row'>
            <div className='w-full h-fit flex justify-center transition-all mr-4'>
                <div className='flex items-start mt-7 mr-10'>
                    <LeftSection />
                </div>
                <RightSection />
            </div>
            {/* <div className='grow col-start-2 col-end-5 p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
            </div> */}
        </div>
    )
}

export default PersonalInformation