import Image from "next/image";
import React from "react";

import PassionFruidOne from "@public/passionfruid/passionone.svg";
import PassionFruidTwo from "@public/passionfruid/passiontwo.svg";
import IdeaIcon from "@public/icons/idea.svg";
import ArrowRightIcon from "@public/icons/arrowRight.svg";
import CancleIcon from "@public/icons/cancle.png";
import CheckIcon from "@public/icons/check.png";

function Flashcard() {
  const data = [
    "Nhanh chóng và dễ dàng để bạn có thể dành thời gian tạo ra nội dung tuyệt vời. Dễ dàng vì không ai thích những điều khó khăn.",
    "Phương pháp học hiệu quả giúp bạn nhớ lâu và học nhanh hơn. Đơn giản và tiện lợi vì học không cần phải phức tạp.",
    "Tăng cường khả năng ghi nhớ của bạn với phương pháp học trực quan. Dễ dàng và thân thiện với người dùng.",
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Left */}
        <div className="flex h-fit w-full md:w-[50%] items-center justify-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="animate-fade-up font-title text-3xl text-center md:text-start md:text-[52px] ">
              FlashCard
            </h1>
            <div className="flex animate-fade-right flex-row items-start gap-4">
              <Image src={IdeaIcon} alt="icon" />
              <p className="text-sm md:text-base font-title font-bold">
                Giải pháp hữu dụng để bạn có thể lưu nhớ các kiến thức hiệu quả
                và dễ dàng hơn
              </p>
            </div>
            {data.map((item, index) => {
              return (
                <div
                  className="flex animate-fade-right flex-row items-start gap-4"
                  key={index}
                >
                  <Image src={ArrowRightIcon} alt="icon" />
                  <p className="text-sm md:text-base ">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex  w-[100%] md:w-[50%] flex-col gap-12">
          <div className="flex h-[50%] w-full items-end justify-end gap-2">
            <div className="animate-wiggle-more">
              <Image src={PassionFruidOne} alt="image" />
            </div>
            <div className="flex h-[200px] w-[355px] animate-flip-down cursor-pointer flex-col justify-between rounded-[20px] border-2 border-black bg-[#65CCA0] p-4 shadow-3d">
              <h3 className="font-title">Dekiru N5</h3>
              <div className="flex w-full items-center justify-center">
                <h3 className="text-center text-3xl font-bold  hover:scale-125 transition">日本語</h3>
              </div>
              <div className="flex flex-row justify-end gap-2">
                <Image
                  src={CancleIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
                <Image
                  src={CheckIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>
          <div className="flex h-[50%] w-full items-end justify-start gap-10">
            <div className="flex h-[200px] w-[355px] animate-flip-up flex-col justify-between rounded-[20px] border-2 border-black bg-[#FFF380] p-4 shadow-3d">
              <h3 className="font-title">Dekiru N5</h3>
              <div className="flex w-full items-center justify-center">
                <h3 className="text-center text-3xl font-bold hover:scale-125 transition">ベトナム人</h3>
              </div>
              <div className="flex flex-row justify-end gap-2">
                <Image
                  src={CancleIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
                <Image
                  src={CheckIcon}
                  alt="icon"
                  height={100}
                  width={100}
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="animate-wiggle-more">
              <Image src={PassionFruidTwo} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
