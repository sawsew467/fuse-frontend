import Image from "next/image";
import React from "react";
import PopularQuestion from "./PopularQuestion";
import Feedback from "./Feedback";

const FeedbackSection = () => {
  return (
    <section className="relative w-full bg-primary">
      <span className="absolute -top-px left-0 z-10 h-2 w-full">
        <Image
          src="/wave.svg"
          alt="wave"
          width={1440}
          height={8}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="absolute -bottom-px left-0 z-10 h-2 w-full rotate-180">
        <Image
          src="/wave.svg"
          alt="wave"
          width={1440}
          height={8}
          className="h-full w-full object-cover"
        />
      </span>
      <div className="container px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[60px] lg:py-20">
        <div className="flex justify-between">
          <div className="relative flex w-full flex-col gap-20 rounded-2xl border-2 border-black bg-background lg:p-14 md:p-10 sm:p-8 p-6 shadow-3d">
            <PopularQuestion />
            <Feedback />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default FeedbackSection;
