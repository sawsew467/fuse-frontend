'use client'

import DashBoard from '@/components/modules/SettingModule/DashBoard';
import SettingAcount from '@/components/modules/SettingModule/SettingAccountSection';

function SettingAccountPage() {

    return (
        <div className='container px-[60px] py-16'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='w-fit h-fit col-start-1 col-end-2 p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
                    <DashBoard />
                </div>
                <div className='col-start-2 col-end-5 p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
                    <SettingAcount />
                </div>
            </div>
        </div>
    )
}

export default SettingAccountPage;