import { headerItems } from "@/data/headerItems";

import { Button } from "@/components/ui/button";

import Logo from "@public/svgr/Logo";

function UserHeader() {
  return (
    <header className="w-full py-4 fixed top-0 left-0">
      <div className="container flex justify-between">
        <Logo />
        <ul className="flex gap-12">
          {headerItems?.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-1">
              <span>{item?.label}</span>
              <div className=" h-[2px] w-14 bg-primary"></div>
            </li>
          ))}
        </ul>
        <div className="space-x-2">
          <Button>Đăng nhập</Button>
          <Button>Đăng ký</Button>
        </div>
      </div>
    </header>
  );
}

export default UserHeader;
