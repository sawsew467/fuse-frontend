import React from "react";
import Timeline from "./Timeline";
import { Button } from "@/components/ui/button";

const SemesterLine = () => {
  return (
    <div className="flex h-fit w-full gap-10 pt-0 px-8 py-2">
      <div className="w-2/5 flex justify-end">
        <div className="flex flex-col mt-4 gap-10">
            
        <Button haveOverlay variant={"outline"}>Spring 2024</Button>
        <Button haveOverlay variant={"outline"}>Spring 2024</Button>
        <Button haveOverlay variant={"outline"}>Spring 2024</Button>
        <Button haveOverlay variant={"outline"}>Spring 2024</Button>
        </div>
      </div>
      <Timeline />
    </div>
  );
};

export default SemesterLine;
