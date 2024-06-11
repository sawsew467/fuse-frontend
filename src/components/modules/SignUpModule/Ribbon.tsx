import { cn } from "@/lib/utils";

function Ribbon({ mode }: { mode: "SIGNIN" | "SIGNUP" }) {
  return (
    <div className="">
      <div
        className={
          "absolute left-[15%] z-0 h-[200px] w-[200vw] rotate-[40deg] bg-[#fff6aa] transition-all duration-500"
        }
      >
        <div
          className={cn(
            "duration-2000 h-[200px] w-0 bg-gradient-to-r from-[#b6ffdf] from-30% to-[#fff6aa] transition-all",
            mode === "SIGNIN" ? "w-[200vw]" : "w-0",
          )}
        />
      </div>
      <div
        className={
          "absolute left-[-40%] z-20 h-[200px] w-[200vw] rotate-[-20deg] bg-[#b6ffdf]"
        }
      >
        <div
          className={cn(
            "duration-2000 h-[200px] w-0 bg-gradient-to-r from-[#ffc4fa] from-80% to-[#b6ffdf] transition-all",
            mode === "SIGNIN" ? "w-[200vw]" : "w-0",
          )}
        />
      </div>
      <div className="absolute left-[-20%] top-[80%] z-30 h-[200px] w-[200vw] translate-x-[100px] translate-y-[100px] rotate-[10deg] bg-[#b5eeff]">
        <div
          className={cn(
            "duration-2000 h-[200px] w-0 bg-gradient-to-r from-[#fff6aa] from-80% to-[#b5eeff] transition-all",
            mode === "SIGNIN" ? "w-[200vw]" : "w-0",
          )}
        />
      </div>
      <div className="absolute left-[-70%] top-[0] z-10 h-[200px] w-[200vw] rotate-[-40deg] bg-[#ffc4fa]">
        <div
          className={cn(
            "duration-2000 h-[200px] w-0 bg-gradient-to-r from-[#b5eeff] from-80% to-[#ffc4fa] transition-all",
            mode === "SIGNIN" ? "w-[200vw]" : "w-0",
          )}
        />
      </div>
    </div>
  );
}

export default Ribbon;
