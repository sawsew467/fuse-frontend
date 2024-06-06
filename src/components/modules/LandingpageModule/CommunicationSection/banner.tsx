import React from "react";

import CommunityBanner from "@public/image/svg/community.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-8 h-72 lg:mt-10">
      <Image
        className="absolute left-0 w-full"
        src={CommunityBanner}
        alt={""}
      ></Image>
    </div>
  );
};

export default Banner;
