'use client'

import Achievements from "@/components/modules/UserProfileModule/Achievements"
import PersonalInformation from "@/components/modules/UserProfileModule/PersonalInformation"

function UserProfileModule() {
  return (
    <div className='container px-[60px] py-16'>
      <div className='flex flex-col gap-4'>
        <div className="px-48 py-0">
          <PersonalInformation />
        </div>
        <Achievements />
      </div>
    </div>
  )
}

export default UserProfileModule