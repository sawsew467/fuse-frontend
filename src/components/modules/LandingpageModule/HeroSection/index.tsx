import { Button } from "@/components/ui/button";

import ButtonArrow from "@public/svgr/ButtonArrow";
import Scopy1 from "@public/svgr/Scopy1";
import Scopy2 from "@public/svgr/Scopy2";
import Arrow_subcribe from "@public/svgr/ArrowSubcribe";
import Mouse from "@public/svgr/Mouse";
import Fly from "@public/svgr/Fly";

function HeroSection() {
  return (
    <section className="w-full">
      <div className="container relative flex flex-col items-center px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[60px] lg:py-28 xl:pt-48">
        <h3 className="mb-3 w-[1024px] text-center font-title font-bold sm:mb-4 sm:text-3xl md:mb-5 md:text-4xl lg:mb-8 lg:text-5xl xl:text-7xl xl:leading-tight">
          Nền tảng <strong className="text-primary">kết nối</strong> và
          <strong className="text-primary"> tương tác</strong> học tập hàng đầu
        </h3>
        <p className="mb-4 w-1/2 text-center text-base font-medium sm:mb-6 md:mb-8 lg:mb-10 lg:text-xl xl:leading-10">
          FUSE - Môi trường nơi bạn có thể kết nối và tham gia vào các phòng học
          và ôn thi trực tuyến
        </p>
        <div className="flex gap-5">
          <Button variant="outline" className="flex gap-1" haveOverlay>
            <p>Phòng học</p>
            <ButtonArrow />
          </Button>
          <Button variant="outline" className="flex gap-1" haveOverlay>
            <p>Phòng ôn thi</p>
            <ButtonArrow />
          </Button>
        </div>
        <div className="absolute inset-0">
          <span className="absolute bottom-20 left-20">
            <Scopy1 />
          </span>
          <span className="absolute bottom-20 right-20">
            <Scopy2 />
          </span>
          <span className="absolute bottom-1/2 right-32 -translate-y-1/2">
            <Arrow_subcribe />
          </span>
          <span className="absolute right-80 top-24">
            <Mouse />
          </span>
          <span className="absolute right-80 top-24">
            <Mouse />
          </span>
          <span className="absolute left-80 top-12">
            <Fly />
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
