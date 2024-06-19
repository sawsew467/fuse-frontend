import React, { useState } from "react";
import Timeline from "./Timeline";
import { Button } from "@/components/ui/button";
import { fakeData } from "@/data/exam-room";

type Question = {
  question: string;
  answers: string[];
  key: string;
};

type TimelineItem = {
  date: string;
  title: string; // Thêm tiêu đề cho mỗi timeline item
  questions: Question[];
};

type SemesterData = {
  title: string; // Thêm tiêu đề cho mỗi semester
  timeline: TimelineItem[];
};

type Data = {
  [key: string]: SemesterData; // Mỗi key là tên của semester
};

const SemesterLine: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("Spring22");
  const [data,setData] = useState<Data>(fakeData)
  const handleSemesterClick = (semester: string) => {
    setSelectedSemester(semester);
  };

  return (
    <div className="flex h-fit w-full gap-10 pt-0 px-8 py-2">
      <div className="w-2/5 flex justify-end">
        <div className="flex flex-col mt-4 gap-10">
          {Object.keys(fakeData).map((semester) => (
            <Button
              key={semester}
              haveOverlay
              variant={"outline"}
              onClick={() => handleSemesterClick(semester)}
            >
              {data[semester].title}
            </Button>
          ))}
        </div>
      </div>
      {data[selectedSemester] && data[selectedSemester].timeline ? (
        <Timeline data={data[selectedSemester].timeline} />
      ) : (
        <p>No timeline data available for the selected semester.</p>
      )}
    </div>
  );
};

export default SemesterLine;
