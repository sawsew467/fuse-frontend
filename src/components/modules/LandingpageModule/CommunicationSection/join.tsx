import { Button } from "@/components/ui/button";
import ButtonArrow from "@public/svgr/ButtonArrow";

export function Join() {
  return (
    <div className="mt-[59px] flex flex-col gap-5 lg:mt-[89px] lg:gap-9">
      <div className="font-regular text-center font-title text-xl md:text-2xl lg:text-3xl">
        {"Bắt đầu sử dụng Fuse để có thể đóng góp suy nghĩ của bạn!"}
      </div>
      <Button className="bg-second mx-auto flex w-52 gap-1" haveOverlay>
        <span>Dùng thử miễn phí</span>
        <ButtonArrow />
      </Button>
    </div>
  );
}
