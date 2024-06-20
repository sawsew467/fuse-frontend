"use client";

import ChatOutSide from "../StudyRoomModule/ChatOutSide";
import OutRoom from "../StudyRoomModule/OutRoom";
import HistoryQuestion from "./History";
import ProfileRoomBoard from "./ProfileRoomBoard";
import Quiz from "./Quizz";

function ExamRoomModule() {
  return (
    <div className="h-full w-full animate-fade select-none">
      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden p-8">
        <OutRoom />
        <Quiz userId={undefined} />
        <HistoryQuestion />
        <ProfileRoomBoard />
        <ChatOutSide />
      </div>
    </div>
  );
}

export default ExamRoomModule;
