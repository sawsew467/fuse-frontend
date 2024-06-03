import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  backgroundColor?: string;
}

function Section({ children, title, subTitle, backgroundColor }: SectionProps) {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor,
      }}
    >
      {backgroundColor && (
        <>
          <div className="absolute left-0 right-0 top-0">
            <Image
              src="/wave.svg"
              alt=""
              width={1440}
              height={6}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 rotate-180">
            <Image
              src="/wave.svg"
              alt=""
              width={1440}
              height={6}
              className="w-full object-cover"
            />
          </div>
        </>
      )}
      <div className="container px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[60px] lg:py-28">
        {title && (
          <h3 className="mb-3 text-center font-title text-2xl font-bold sm:mb-4 sm:text-3xl md:mb-5 md:text-4xl lg:mb-6 lg:text-5xl">
            {title}
          </h3>
        )}
        {subTitle && (
          <p className="mb-4 text-center text-base sm:mb-6 md:mb-8 lg:mb-10 lg:text-xl">
            {subTitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
