import InputLayout from '@/components/modules/SettingModule/inputLayout'
import { Button } from '@/components/ui/button'
import React from 'react'

function SettingAcountSection() {
  return (
    <>
      <h3 className='mb-3 text-left font-title text-xl font-bold sm:mb-4 sm:text-xl md:mb-5 md:text-2xl lg:mb-6 lg:text-3xl'>
        Tài Khoản
      </h3>
      <div className='flex flex-col gap-4'>
        <InputLayout
          type='password'
          label={`<span class="text-red-500">*</span> Mật khẩu hiện tại`}
          placeholder='Nhập mật khẩu hiện tại' />
        <InputLayout
          type='password'
          label={`<span class="text-red-500">*</span> Mật khẩu mới`}
          placeholder='Nhập mật khẩu mới' />
        <InputLayout
          type='password'
          label={`<span class="text-red-500">*</span> Xác nhận mật khẩu mới`}
          placeholder='Nhập xác nhận mật khẩu mới' />
        <div className='grid justify-items-end mt-4'>
          <Button haveOverlay>
            <span>Cập nhật</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default SettingAcountSection