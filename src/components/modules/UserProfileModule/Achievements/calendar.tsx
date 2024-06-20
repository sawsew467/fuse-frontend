import FireAnimation from '@/components/modules/UserProfileModule/Achievements/FireAnimation';
import { Button } from '@/components/ui/button';
import FireIcon from '@public/svgr/FireIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Calendar: React.FC = () => {
  const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const daysOfMonth = [
    { day: "1", isLearn: false },
    { day: "2", isLearn: true },
    { day: "3", isLearn: false },
    { day: "4", isLearn: false },
    { day: "5", isLearn: true },
    { day: "6", isLearn: false },
    { day: "7", isLearn: false },
    { day: "8", isLearn: false },
    { day: "9", isLearn: false },
    { day: "10", isLearn: true },
    { day: "11", isLearn: true },
    { day: "12", isLearn: false },
    { day: "13", isLearn: false },
    { day: "14", isLearn: false },
    { day: "15", isLearn: true },
    { day: "16", isLearn: true },
    { day: "17", isLearn: false },
    { day: "18", isLearn: false },
    { day: "19", isLearn: false },
    { day: "20", isLearn: true },
    { day: "21", isLearn: false },
    { day: "22", isLearn: false },
    { day: "23", isLearn: false },
    { day: "24", isLearn: false },
    { day: "25", isLearn: false },
    { day: "26", isLearn: true },
    { day: "27", isLearn: false },
    { day: "28", isLearn: true },
    { day: "29", isLearn: true },
    { day: "30", isLearn: false },
    { day: "31", isLearn: false }
  ];
  return (
    <div className="w-96 p-6 ">
      <header className="flex items-center p-[25px 30px 10px] justify-between">
        <p className="text-xl font-semibold">Tháng 6 / 2024</p>
        <div className="flex icons">
          <ChevronLeft className="w-9 h-9 mr-2 cursor-pointer text-center select-none border-2 rounded-lg hover:bg-[#ff9966] hover:text-white transition-all" />
          <ChevronRight className="w-9 h-9 cursor-pointer text-center select-none border-2 rounded-lg hover:bg-[#ff9966] hover:text-white transition-all" />
        </div>
      </header>
      <div className="calendar pt-5">
        <ul className="weeks list-none text-center grid grid-cols-7 gap-4 mb-4">
          {daysOfWeek.map((day) => (
            <li key={day} className="w-[calc(100% / 7)] font-semibold cursor-default select-none">{day}</li>
          ))}
        </ul>
        <ul className="list-none text-center grid grid-cols-7 gap-4">
          {daysOfMonth.map((dayObj) => (
            <li key={dayObj.day} className='z-[1] cursor-default select-none relative before:absolute before:left-[50%] before:top-[50%] before:w-10 before:h-10 rounded-none '>
              {dayObj.day}
              {dayObj.isLearn && (
                <div className="absolute z-[-1] bottom-[-80px] left-1/2 transform -translate-x-1/2">
                  <FireAnimation />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
