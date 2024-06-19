'use client'

import Achievements from "@/components/modules/UserProfileModule/Achievements"
import PersonalInformation from "@/components/modules/UserProfileModule/PersonalInformation"

function UserProfileModule() {
  return (
    <div className='container px-[60px] py-16'>
      <div className='flex flex-col gap-4'>
        <PersonalInformation />
        <Achievements />
      </div>
    </div>
  )
}

export default UserProfileModule