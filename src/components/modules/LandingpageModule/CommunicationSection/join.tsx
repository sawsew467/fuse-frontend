import { Button } from "@/components/ui/button";
import ButtonArrow from "@public/svgr/ButtonArrow";

export function Join() {
  return (
    <div className="mt-8 flex flex-col gap-5 lg:mt-10 lg:gap-9">
      <div className="font-regular text-center font-title text-xl md:text-2xl lg:text-3xl">
        {"Bắt đầu sử dụng Fuse để có thể đóng góp suy nghĩ của bạn!"}
      </div>
      <Button className="mx-auto flex w-52 gap-1" haveOverlay>
        <span>Dùng thử miễn phí</span>
        <ButtonArrow />
      </Button>
    </div>
  );
}
