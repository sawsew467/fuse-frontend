"use client";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import ProductCard from "./productCard";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const keys = [
  {
    value: "flash_card",
    lable: "FlashCard",
  },
  {
    value: "study_postiion",
    lable: "Khu học tập",
  },
  {
    value: "exam_reviews_postiion",
    lable: "Khu ôn thi",
  },
];
type Turns = {
  key: string;
};

function ProductSection() {
  const [turn, setTurn] = useState<Turns>({ key: keys[0].value });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTurn((prevTurn) => {
  //       const currentIndex = keys.findIndex(
  //         (item) => item.value === prevTurn.key,
  //       );
  //       const nextIndex = (currentIndex + 1) % keys.length;
  //       return { key: keys[nextIndex].value };
  //     });
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Section
      title="Cung cấp những công cụ hỗ trợ"
      subTitle="Thoả sức học tập và kết nối"
      backgroundColor="#FF9966"
    >
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <div className="flex gap-7">
          {keys.map((item, index: number) => (
            <button
              key={index}
              className={cn(
                "rounded-md border-2 border-black px-7 py-1 transition duration-300 hover:bg-secondary-foreground hover:text-white",
                turn.key === item.value
                  ? "bg-secondary-foreground text-white"
                  : "bg-[#f5f3ea] text-black",
              )}
              onClick={() => {
                setTurn({ key: item.value });
              }}
            >
              {item.lable}
            </button>
          ))}
        </div>
        <ProductCard turn={turn} />
      </div>
    </Section>
  );
}

export default ProductSection;
