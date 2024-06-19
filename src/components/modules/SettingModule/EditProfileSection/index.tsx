import React from 'react'

import InputLayout from '@/components/modules/SettingModule/inputLayout';
import TextAreaLayout from "@/components/modules/SettingModule/textAreaLayout";
import SelectLayout from '@/components/modules/SettingModule/selectLayout';
import { CalendarForm } from '@/components/modules/SettingModule/EditProfileSection/calendar';
import { Button } from '@/components/ui/button';

// interface EditProfileSectionProps {
//     majors: {
//         label: string,
//         items: {
//             value: string;
//             label: string;
//         }
//     }
// }

const genders = [
    {
        label: "",
        items: [
            { value: "male", label: "Nam" },
            { value: "female", label: "Nữ" },
            { value: "noAnswer", label: "Không muốn trả lời" },
        ],
    },
];

const majors = [
    {
        label: "Quản trị kinh doanh",
        items: [
            { value: "dm", label: "Digital Marketing" },
            { value: "kdqt", label: "Kinh doanh quốc tế" },
            { value: "qtks", label: "Quản trị khách sạn" },
        ],
    },
    {
        label: "Công nghệ thông tin",
        items: [
            { value: "ktpm", label: "Kỹ thuật phần mềm" },
            { value: "attt", label: "An toàn thông tin" },
            { value: "tkmts", label: "Thiết kế mỹ thuật số" },
        ],
    },
];

const semesters = [
    {
        label: "",
        items: [
            { value: 'en', label: 'Kỳ Tiếng Anh dự bị' },
        ],
    },
    {
        label: "Năm Nhất",
        items: [
            { value: "sm1", label: "Kỳ chuyên ngành 1" },
            { value: "sm2", label: "Kỳ chuyên ngành 2" },
            { value: "sm3", label: "Kỳ chuyên ngành 3" },
        ],
    },
    {
        label: "Năm Hai",
        items: [
            { value: "sm4", label: "Kỳ chuyên ngành 4" },
            { value: "sm5", label: "Kỳ chuyên ngành 5" },
            { value: "sm6", label: "Kỳ chuyên ngành 6" },
        ],
    },
    {
        label: "Năm Ba",
        items: [
            { value: "sm7", label: "Kỳ chuyên ngành 7" },
            { value: "sm8", label: "Kỳ chuyên ngành 8" },
            { value: "sm9", label: "Kỳ chuyên ngành 9" },
        ],
    },
];

function EditProfileSection() {
    return (
        <div className=''>
            <h3 className='mb-3 text-left font-title text-xl font-bold sm:mb-4 sm:text-xl md:mb-5 md:text-2xl lg:mb-6 lg:text-3xl'>
                Hồ Sơ
            </h3>
            <div className='grid grid-cols-4 gap-4 mb-4'>
                <InputLayout className='col-span-2' type='text' label='Họ và tên' placeholder='Nhập họ và tên của bạn' />
                {/* <InputLayout className='col-span-1' type='text' label='Tên' placeholder='Nhập tên của bạn' /> */}
                <SelectLayout className='col-span-1' label='Giới tính' placeholder='Chọn giới tính' options={genders} />
                {/* <div className=''> */}
                <CalendarForm />
                {/* </div> */}
            </div>
            <div className='grid grid-cols-2 gap-4 mb-4'>
                <InputLayout className='col-span-1' type='email' label='Email' placeholder='Nhập địa chỉ email của bạn' />
                <InputLayout className='col-span-1' type='text' label='Số điện thoại' placeholder='Nhập số điện thoại' />
            </div>
            <div className='grid gap-4 grid-cols-5 w-full'>
                <InputLayout type='text' label='Mã số sinh viên' placeholder='Nhập mã số sinh viên' />
                <SelectLayout className='col-span-2' label='Chuyên ngành' placeholder='Chọn chuyên ngành của bạn' options={majors} />
                <SelectLayout className='col-span-2' label='Học kỳ' placeholder='Chọn học kỳ' options={semesters} />
            </div>
            <TextAreaLayout label="Mô tả bản thân" className="pt-4" />
            <div className='grid justify-items-end mt-4'>
                <Button haveOverlay>
                    <span>Cập nhật</span>
                </Button>
            </div>
        </div>
    )
}

export default EditProfileSection