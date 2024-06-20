import { cn } from "@/lib/utils";
import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  backgroundColor?: string;
  className?: string;
}

function Section({
  className,
  children,
  title,
  backgroundColor,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col gap-2 pb-3 ",
        className,
      )}
      style={{
        backgroundColor,
      }}
    >
      <div className="flex gap-2">
        {title && (
          <h3 className="text-left font-title text-lg font-bold ">
            {title}
          </h3>
        )}
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}

export default Section;
