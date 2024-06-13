import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import InputLayout from '@/components/modules/EditModule/inputLayout';
import TextAreaLayout from "@/components/modules/EditModule/textAreaLayout";

// interface EditProfileProps {
//     majors: {
//         label: string,
//         items: {
//             value: string;
//             label: string;
//         }
//     }
// }
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
            { value: "sm1", label: "Kỳ Chuyên Ngành 1" },
            { value: "sm2", label: "Kỳ Chuyên Ngành 2" },
            { value: "sm3", label: "Kỳ Chuyên Ngành 3" },
        ],
    },
    {
        label: "Năm Hai",
        items: [
            { value: "sm4", label: "Kỳ Chuyên Ngành 4" },
            { value: "sm5", label: "Kỳ Chuyên Ngành 5" },
            { value: "sm6", label: "Kỳ Chuyên Ngành 6" },
        ],
    },
    {
        label: "Năm Ba",
        items: [
            { value: "sm7", label: "Kỳ Chuyên Ngành 7" },
            { value: "sm8", label: "Kỳ Chuyên Ngành 8" },
            { value: "sm9", label: "Kỳ Chuyên Ngành 9" },
        ],
    },
];

function EditProfile() {
  return (
    <div className='col-span-3 row-start-1 row-end-4 p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
    <h3 className='mb-3 text-left font-title text-xl font-bold sm:mb-4 sm:text-xl md:mb-5 md:text-2xl lg:mb-6 lg:text-3xl'>
        Hồ Sơ
    </h3>
    <div className='grid grid-cols-2 gap-4 mb-4'>
        <InputLayout label='Họ' placeholder='Nhập họ của bạn' />
        <InputLayout label='Tên' placeholder='Nhập tên của bạn' />
        <InputLayout label='Mã số sinh viên' placeholder='Nhập mã số sinh viên của bạn' />
        <InputLayout label='Số điện thoại' placeholder='Nhập số điện thoại' />
    </div>
    <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-1'>
            <h5 className='text-sm font-semibold'>Giới tính</h5>
            <Select >
                <SelectTrigger className="bg-transparent">
                    <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="male">Nam</SelectItem>
                        <SelectItem value="female">Nữ</SelectItem>
                        <SelectItem value="noAnswer">Không muốn trả lời</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className='col-span-2'>
            <h5 className='text-sm font-semibold'>Chuyên ngành</h5>
            <Select>
                <SelectTrigger className="bg-transparent">
                    <SelectValue placeholder="Chọn chuyên ngành của bạn" />
                </SelectTrigger>
                <SelectContent>
                    {majors.map((major, index) => (
                        <SelectGroup key={index}>
                            <SelectLabel>{major.label}</SelectLabel>
                            {major.items.map((item, idx) => (
                                <SelectItem key={idx} value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className='col-span-2'>
            <h5 className='text-sm font-semibold'>Học kỳ</h5>
            <Select>
                <SelectTrigger className="bg-transparent">
                    <SelectValue placeholder="Chọn học kỳ" />
                </SelectTrigger>
                <SelectContent>
                    {semesters.map((semester, index) => (
                        <SelectGroup key={index}>
                            <SelectLabel>{semester.label}</SelectLabel>
                            {semester.items.map((item, idx) => (
                                <SelectItem key={idx} value={item.value}>{item.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    ))}
                </SelectContent>
            </Select>
        </div>
    </div>
    <TextAreaLayout label="Mô tả bản thân" className="pt-4"/>
</div>
  )
}

export default EditProfile