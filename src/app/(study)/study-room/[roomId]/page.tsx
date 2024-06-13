import StudyRoomModule from "@/components/modules/Rooms/StudyRoomModule";
import React from "react";

type TProps = {
  params: {
    roomId: string;
  };
};

function StudyRoom({ params }: TProps) {
  console.log("Study Room ID: " + params.roomId);
  return <StudyRoomModule />;
}

export default StudyRoom;
