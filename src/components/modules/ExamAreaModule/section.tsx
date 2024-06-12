import { cn } from "@/lib/utils";
import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  icon: string;
  title?: string;
  backgroundColor?: string;
  className?: string;
}

function Section({
  className,
  children,
  title,
  backgroundColor,
  icon,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative top-10 flex w-full flex-col gap-2 pb-10 sm:pb-12 md:pb-14 lg:gap-4 lg:pb-20",
        className,
      )}
      style={{
        backgroundColor,
      }}
    >
      <div className="flex gap-2">
        {title && (
          <h3 className="mb-3 text-left font-title text-xl font-bold sm:mb-4 sm:text-xl md:mb-5 md:text-2xl lg:mb-6 lg:text-3xl">
            {title}
          </h3>
        )}
        {icon && (
          <Image src={icon} className="h-7 w-auto lg:h-9" alt={""}></Image>
        )}
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}

export default Section;
