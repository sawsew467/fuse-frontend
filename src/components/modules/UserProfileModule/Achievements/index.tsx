import Calendar from '@/components/modules/UserProfileModule/Achievements/calendar'
import Section from '@/components/modules/UserProfileModule/Achievements/section'
import { Button } from '@/components/ui/button'
import React from 'react'

const data = {
    favoriteSubjects: ["MAS291", "MAE101", "LAB211", "SWP391"],
    recentSubjects: ["PRJ301", "PRO192", "WED201c", "SWP391", "MAS291", "MAE101", "LAB211"],
  };

function Achievements() {
    return (
        <div className='flex flex-row'>
            <div className='w-fit h-fit  rounded-lg border-2 border-black bg-white shadow-3d transition-all mr-4'>
                <Calendar />
            </div>
            <div className='w-full grow p-6 rounded-lg border-2 border-black bg-white shadow-3d transition-all '>
                <div>
                    <Section title='Môn học yêu thích'>
                        <div className=''>
                            <div className='flex w- gap-3 '>
                                {data.favoriteSubjects.map((subject, index) => (
                                    <Button key={index} className='w-fit h-fit p-1 bg-gradient-to-r from-[#FF9966] to-white'>
                                        <span className='text-sm'>{subject}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Section>
                    <Section title='Tham gia gần đây'>
                    <div className=''>
                            <div className='flex w- gap-3 '>
                                {data.recentSubjects.map((subject, index) => (
                                    <Button key={index} className='w-fit h-fit p-1 bg-gradient-to-r from-[#FF9966] to-white'>
                                        <span className='text-sm'>{subject}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    )
}

export default Achievements