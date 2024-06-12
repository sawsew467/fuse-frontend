import Image from "next/image";
import React from "react";

function TitleCard() {
  return (
    <div className="h-fit w-full sm:w-[400px] rounded-[20px] border-2 shadow-3d-light hover:shadow-3d-hover transition border-black bg-white">
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[20px] font-bold">JPD123</h3>
        <p className="font-bold">Dekiru1＿Kanji 4+5_Những từ cơ bản</p>
        <div className="h-fit w-fit rounded-lg border-2 border-black px-2 bg-white">
          <p>20 lượt học</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
            <div className="border-2 border-black w-fit  rounded-[50%] overflow-hidden shadow-3d-light">
                <Image src={"https://res.cloudinary.com/dy1uuo6ql/image/upload/v1713897426/nk4zyhnkf8yghycffnqs.jpg"} alt="Image" width={200} height={200} className="w-[50px] h-[50px] object-cover"/>
            </div>
            <div>
                <p className="font-bold">Kazuha Itsuki</p>
                <p>@itsuki</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
