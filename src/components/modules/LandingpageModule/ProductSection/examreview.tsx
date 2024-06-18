import Image from "next/image";
import React from "react";

import PassionFour from "@public/passionfruid/passionfour.svg";
import PassionFive from "@public/passionfruid/passionfive.svg";
import HandPointer from "@public/passionfruid/handpointer.svg";
import Hourse3 from "../HeroSection/Hourse31";

function ExamReview() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div className="w-full">
        <h3 className="animate-fade-up text-center font-title text-3xl md:text-[52px]">
          Khu ôn thi
        </h3>
      </div>
      <div className="flex h-fit w-full flex-col gap-6 md:flex-row">
        <div className="flex h-fit w-full flex-col gap-4 md:w-[50%]">
          <div className="flex w-full items-end justify-center gap-2 sm:gap-8 md:justify-end">
            {/* image */}
            <div className="h-[100px] animate-fade-right">
              <Image
                src={PassionFive}
                alt="image"
                height={200}
                width={200}
                className="h-[100px] w-[100px]"
              />
              {/* <Hourse3 /> */}
            </div>
            {/* board */}
            <div className="h-[150px] w-[80%] animate-flip-up rounded-[20px] border-2 border-black bg-[#65CCA0] p-3 shadow-3d sm:h-[160px] sm:w-[400px] sm:p-4 lg:h-[200px] lg:p-6">
              {/* board content */}
              <div className="flex h-full w-full flex-row rounded-xl border-2 border-black bg-[#f5f3ea]">
                {/* History */}
                <div className="flex h-full w-[50%] flex-col gap-2 p-2">
                  <h4 className="animate-fade-up font-title">History</h4>
                  <div className="h-3 w-[90%] animate-fade-right rounded-lg bg-[#65CCA0] animate-delay-200"></div>
                  <div className="animate-delay-400 h-3 w-[60%] animate-fade-right rounded-lg bg-[#65CCA0]"></div>
                  <div className="animate-delay-400 h-3 w-[80%] animate-fade-right rounded-lg bg-[#65CCA0]"></div>
                  <div className="animate-delay-600 h-3 w-[40%] animate-fade-right rounded-lg bg-[#cc6565]"></div>
                  <div className="animate-delay-400 h-3 w-[70%] animate-fade-right rounded-lg bg-[#65CCA0]"></div>
                </div>
                <div className="h-full w-[50%] p-2 sm:p-4">
                  <div className="flex h-full w-full animate-fade-right flex-row items-end gap-1 border-b-4 border-black p-2 sm:gap-2">
                    <div className="animate-delay-400 h-[40%] w-[14px] animate-fade-up bg-[#65CCA0]"></div>
                    <div className="h-[60%] w-[14px] animate-fade-up bg-[#65CCA0] animate-delay-100"></div>
                    <div className="animate-delay-600 h-[100%] w-[14px] animate-fade-up bg-[#65CCA0]"></div>
                    <div className="animate-delay-400 h-[70%] w-[14px] animate-fade-up bg-[#65CCA0]"></div>
                    <div className="animate-delay-800 h-[50%] w-[14px] animate-fade-up bg-[#65CCA0]"></div>
                    <div className="animate-delay-900 h-[30%] w-[14px] animate-fade-up bg-[#65CCA0]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6">
            {/* Text1 */}
            <div className="flex animate-fade-right flex-row items-start justify-center gap-2 sm:gap-8 md:justify-end">
              <Image
                src={HandPointer}
                alt="icon"
                width={24}
                height={24}
                className="scale-x-[-1]"
              />
              <p className="max-w-[400px] text-start text-sm sm:text-base">
                Hệ thống sẽ tự động thống kê các lựa chọn mà những người khác đã
                chọn sau mỗi câu hỏi, giúp bạn so sánh và học hỏi từ kinh nghiệm
                của cộng đồng.
              </p>
            </div>
            {/* Text2 */}
            <div className="flex animate-fade-right flex-row items-start justify-center gap-2 sm:gap-8 md:justify-end">
              <Image
                src={HandPointer}
                alt="icon"
                width={24}
                height={24}
                className="scale-x-[-1]"
              />
              <p className="max-w-[400px] text-start text-sm sm:text-base">
                Ghi lại lịch sử các phiên ôn thi, giúp bạn theo dõi tiến trình
                học tập và ôn luyện của mình một cách dễ dàng.
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-fit w-full flex-col gap-4 md:w-[50%]">
          <div className="flex w-full items-end justify-center gap-2 sm:gap-8 md:justify-start">
            {/* board */}
            <div className="h-[150px] w-[80%] animate-flip-down rounded-[20px] border-2 border-black bg-[#65CCA0] p-3 shadow-3d sm:h-[160px] sm:w-[400px] sm:p-4 lg:h-[200px] lg:p-6">
              <div className="flex h-full w-full flex-row items-center gap-6">
                <div className="h-full w-[70%] rounded-lg border-2 border-black bg-[#fef08a] p-4">
                  <div className="flex h-[50%] w-full flex-col gap-2">
                    <div className="flex w-full">
                      <div className="h-3 w-[100%] animate-fade-right rounded-lg bg-gray-600"></div>
                    </div>
                    <div className="flex w-full">
                      <div className="h-3 w-[100%] animate-fade-right rounded-lg bg-gray-600"></div>
                    </div>
                    <div className="flex w-full">
                      <div className="h-3 w-[50%] animate-fade-right rounded-lg bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex h-[50%] w-full flex-col gap-1">
                    <div className="flex w-full items-center gap-2">
                      <div className="flex h-4 w-4 animate-fade-right items-center justify-center rounded-xl border-2 border-black bg-white text-center text-[10px]">
                        A
                      </div>
                      <div className="h-3 w-[60%] animate-fade-right rounded-lg bg-gray-600"></div>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <div className="flex h-4 w-4 animate-fade-right items-center justify-center rounded-xl border-2 border-black bg-white text-center text-[10px]">
                        B
                      </div>
                      <div className="h-3 w-[60%] animate-fade-right rounded-lg bg-gray-600"></div>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <div className="flex h-4 w-4 animate-fade-right items-center justify-center rounded-xl border-2 border-black bg-white text-center text-[10px]">
                        C
                      </div>
                      <div className="h-3 w-[60%] animate-fade-right rounded-lg bg-gray-600"></div>
                    </div>
                  </div>
                </div>
                <div className="flex h-[80%] w-[30%] flex-col gap-2 rounded-lg border-2 border-black bg-white p-2">
                  <div className="flex w-full">
                    <div className="h-3 w-[90%] animate-fade-right rounded-lg bg-slate-300"></div>
                  </div>
                  <div className="flex w-full justify-end">
                    <div className="h-3 w-[60%] animate-fade-left rounded-lg bg-slate-300"></div>
                  </div>
                  <div className="flex w-full">
                    <div className="h-3 w-[70%] animate-fade-right rounded-lg bg-slate-300"></div>
                  </div>
                  <div className="flex w-full justify-end">
                    <div className="h-3 w-[50%] animate-fade-left rounded-lg bg-slate-300"></div>
                  </div>
                  <div className="flex w-full">
                    <div className="h-3 w-[70%] animate-fade-right rounded-lg bg-slate-300"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="h-[100px] animate-fade-right">
              <Image
                src={PassionFour}
                alt="image"
                height={200}
                width={200}
                className="h-[100px] w-[100px] scale-x-[-1]"
              />
              {/* <Hourse3 /> */}
            </div>
          </div>
          <div className="flex w-full flex-col gap-6">
            {/* Text1 */}
            <div className="flex animate-fade-left flex-row items-start justify-center gap-2 sm:gap-8 md:justify-start">
              <p className="max-w-[400px] text-end text-sm sm:text-base">
                Khu vực ôn thi hỗ trợ trò chuyện, giúp bạn trao đổi và tìm hiểu
                thông tin một cách dễ dàng và nhanh chóng.
              </p>
              <Image src={HandPointer} alt="icon" width={24} height={24} />
            </div>
            {/* Text2 */}
            <div className="flex animate-fade-left flex-row items-start justify-center gap-2 sm:gap-8 md:justify-start">
              <p className="max-w-[400px] text-end text-sm sm:text-base">
                Tổ chức phòng ôn thi theo từng bộ môn và bộ đề được cung cấp
                sẵn, giúp bạn tập trung học tập và ôn luyện một cách hiệu quả.
              </p>
              <Image src={HandPointer} alt="icon" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamReview;
