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
      <div className="container relative flex flex-col items-center px-5 py-10 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pt-28 lg:px-[60px] lg:py-28 lg:pt-36 xl:pt-48">
        <h3 className="mb-3 w-[clamp(100%,400px)] text-center font-title text-3xl font-bold leading-tight sm:mb-4 sm:w-[500px] sm:text-4xl md:mb-5 md:w-[650px] md:text-5xl md:leading-tight lg:mb-8 lg:w-[815px] lg:text-6xl lg:leading-tight xl:w-[1024px] xl:text-7xl xl:leading-tight">
          Nền tảng <strong className="text-primary">kết nối</strong> và
          <strong className="text-primary"> tương tác</strong> học tập hàng đầu
        </h3>
        <p className="mb-4 w-2/3 text-center text-xs font-medium sm:mb-6 sm:text-base sm:leading-4 md:mb-8 md:w-1/2 md:text-lg md:leading-6 lg:mb-10 lg:text-xl lg:leading-8 xl:leading-10">
          FUSE - Môi trường nơi bạn có thể kết nối và tham gia vào các phòng học
          và ôn thi trực tuyến
        </p>
        <div className="flex gap-5">
          <Button variant="outline" className="flex gap-1" haveOverlay>
            <p className="text-xs md:text-base">Phòng học</p>
            <ButtonArrow />
          </Button>
          <Button variant="outline" className="flex gap-1" haveOverlay>
            <p className="text-xs md:text-base">Phòng ôn thi</p>
            <ButtonArrow />
          </Button>
        </div>
        <div className="absolute inset-0">
          <span className="absolute bottom-0 hidden scale-50 transition-all duration-700 sm:block md:left-0 md:scale-75 lg:bottom-14 lg:left-14 lg:w-44 xl:bottom-20 xl:left-20">
            <Scopy1 className="aspect-auto h-full w-full" />
          </span>
          <span className="absolute bottom-0 hidden scale-50 transition-all duration-700 sm:-right-5 sm:block md:right-0 md:scale-75 lg:bottom-14 lg:right-14 lg:w-56 xl:bottom-20 xl:right-20">
            <Scopy2 />
          </span>
          <span className="absolute bottom-1/2 hidden -translate-y-1/2 scale-50 transition-all duration-700 md:right-16 md:scale-75 lg:right-32">
            <Arrow_subcribe />
          </span>
          <span className="absolute right-3.5 scale-50 transition-all duration-700 sm:right-40 md:right-52 md:top-8 md:scale-75 lg:right-40 lg:top-12 xl:right-80 xl:top-24">
            <Mouse />
          </span>
          <span className="absolute -top-14 left-3.5 scale-50 transition-all duration-700 sm:left-40 md:left-52 md:top-0 md:scale-75 lg:left-40 xl:left-80">
            <Fly />
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
