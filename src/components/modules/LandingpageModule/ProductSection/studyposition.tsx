import Image from "next/image";
import React from "react";

import PassionFruitThree from "@public/passionfruid/passionthree.svg";
import MicIcon from "@public/icons/mic.svg";
import PhoneIcon from "@public/icons/call.svg";
import VideoCallIcon from "@public/icons/videocall.svg";
import MusicIcon from '@public/icons/music.svg';
import BookIcon from '@public/icons/book.svg'

function StudyPosition() {
  return (
    <div className="flex h-full w-full flex-col-reverse  md:flex-row gap-6 md:gap-8">
      <div className="h-full w-full md:w-[50%]">

        <div className="h-fit w-full rounded-xl border-2 border-black bg-[#FFF380] pb-6 shadow-3d animate-fade">
          <div className="flex w-full flex-wrap justify-center gap-2 p-2 md:p-4 xl:8">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="h-[30px] md:h-[40px] lg:h-[60px] w-[50px] md:w-[60px] xl:w-[80px] rounded-md border-2 border-black bg-primary shadow-3d animate-flip-up"></div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="shadow-3d-light h-8 w-8 rounded-[50%] border-2 border-black bg-white p-1 animate-fade-right">
              <Image src={MicIcon} alt="icon" />
            </div>
            <div className="shadow-3d-light h-8 w-8 rounded-[50%] border-2 border-black bg-white p-1 animate-fade-right">
              <Image src={VideoCallIcon} alt="icon" />
            </div>
            <div className="shadow-3d-light h-8 w-8 rounded-[50%] border-2 border-black bg-white p-1 animate-fade-right">
              <Image src={PhoneIcon} alt="icon" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:h-[fit] w-full items-center justify-center animate-wiggle">
          <Image src={PassionFruitThree} alt="images" />
        </div>
      </div>

      <div className="flex h-full w-full flex-col gap-6 md:w-[50%] justify-center">
        <div>
          <h3 className="text-center md:text-end font-title text-3xl md:text-4xl lg:text-[54px] animate-fade-up">Khu học tập</h3>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col animate-fade-left">
            <div className="flex flex-row items-center justify-end gap-2">
              <h3 className="text-end font-title font-bold text-sm md:text-base ">Video call</h3>
              <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border-2 border-black bg-white">
                <Image src={VideoCallIcon} alt="icon" width={18} height={18} />
              </div>
            </div>
            <p className="text-end text-sm md:text-base ">
              Không gian học tập tiện lợi với tính năng video call giữa nhiều
              người, giúp bạn và nhóm của mình học tập hiệu quả. Dễ dàng tạo môi
              trường học tập lý tưởng cho bạn và mọi người.
            </p>
          </div>
          <div className="flex flex-col animate-fade-left">
            <div className="flex flex-row items-center justify-end gap-2">
              <h3 className="text-end font-title font-bold text-sm md:text-base ">
                Học tập cùng nhau
              </h3>
              <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border-2 border-black bg-white">
                <Image src={BookIcon} alt="icon" width={18} height={18} />
              </div>
            </div>
            <p className="text-end text-sm md:text-base ">
              Khu vực học tập giúp mọi người trao đổi và học hỏi lẫn nhau. Hỗ
              trợ chat để bạn dễ dàng tương tác và thảo luận.
            </p>
          </div>
          <div className="flex flex-col animate-fade-left">
            <div className="flex flex-row items-center justify-end gap-2">
              <h3 className="text-end font-title font-bold text-sm md:text-base ">Nhạc nền</h3>
              <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border-2 border-black bg-white">
                <Image src={MusicIcon} alt="icon" width={18} height={18} />
              </div>
            </div>
            <p className="text-end text-sm md:text-base ">
              Nơi học tập với tính năng bật nhạc nền nhẹ nhàng, giúp bạn thư
              giãn và tập trung hơn. Học tập trở nên thú vị và dễ dàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPosition;
