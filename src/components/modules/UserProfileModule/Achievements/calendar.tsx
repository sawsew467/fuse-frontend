import FireAnimation from '@/components/modules/UserProfileModule/Achievements/FireAnimation';
import { Button } from '@/components/ui/button';
import FireIcon from '@public/svgr/FireIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Calendar: React.FC = () => {
  const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const daysOfMonth = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
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
          {daysOfMonth.map((day)=>(
            <li key={day} className=' z-[1] cursor-default select-none relative before:absolute before:left-[50%] before:top-[50%] before:w-10 before:h-10 rounded-none '>{day}</li>
          ))}
        </ul>
      <FireAnimation/>
      {/* <FireIcon/> */}
      </div>
    </div>
  );
};

export default Calendar;
