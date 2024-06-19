'use client'

import Achievements from "@/components/modules/UserProfileModule/Achievements"
import PersonalInformation from "@/components/modules/UserProfileModule/PersonalInformation"

function UserProfileModule() {
  return (
    <div className='container px-[60px] py-16'>
      <div className='flex flex-col gap-4'>
        <div className='p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
          <PersonalInformation/>
        </div>
        <div className='p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
          <Achievements/>
        </div>
      </div>
    </div>
  )
}

export default UserProfileModule