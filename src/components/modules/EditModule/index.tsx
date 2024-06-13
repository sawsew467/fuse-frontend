'use client'

import EditProfile from '@/components/modules/EditModule/EditProfile/editProfile';
import MenuSideBar from '@/components/modules/EditModule/MenuSidebar/menu';
import Setting from '@/components/modules/EditModule/Setting/setting';

function EditModule() {

    return (
        <div className='container px-[60px] py-16'>
            <div className='w-full grid grid-cols-4 grid-rows-4 gap-4'>
                <MenuSideBar />
                <EditProfile />
                <Setting/>
            </div>
        </div>
    )
}

export default EditModule;