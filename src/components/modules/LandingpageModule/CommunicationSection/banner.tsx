import React from "react";

import CommunityBanner from "@public/image/svg/community.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="pb-10 sm:pb-12 md:pb-14 lg:pb-28">
      <Image className="w-full" src={CommunityBanner} alt={""}/>
    </div>
  );
};

export default Banner;
