
import React, { useState, ChangeEvent } from "react";

import { Button } from "@/components/ui/button";
import Timeline from "../SemesterLine/Timeline";

const index = () => {
  return (
    <div className="w-full h-full px-4 py-4 border-black border-2 ">
       <div className="flex gap-10 w-full ">
      <div className="flex flex-col gap-5">
        <Button haveOverlay variant="link">KHOA HOC</Button>
        <Button haveOverlay variant="link">KHOA HOC</Button>
        <Button haveOverlay variant="link">KHOA HOC</Button>
        <Button variant="link">KHOA HOC</Button>
      </div>
      <div className="w-2/3">
        <Timeline/>
      </div>
    </div>
  </div>
  )
}

export default index