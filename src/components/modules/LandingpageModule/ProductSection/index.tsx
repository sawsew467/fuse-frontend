"use client";

import { useEffect, useRef, useState } from "react";

import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

import ProductCard from "./productCard";

export const keys = [
  {
    value: "flash_card",
    lable: "FlashCard",
  },
  {
    value: "exam_reviews_postiion",
    lable: "Khu ôn thi",
  },
  {
    value: "study_postiion",
    lable: "Khu học tập",
  },
];

type Turns = {
  key: string;
};

function ProductSection() {
  const [turn, setTurn] = useState<Turns>({ key: keys[0].value });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setTurn((prevTurn) => {
        const currentIndex = keys.findIndex(
          (item) => item.value === prevTurn.key,
        );
        const nextIndex = (currentIndex + 1) % keys.length;
        return { key: keys[nextIndex].value };
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <Section
      title="Cung cấp những công cụ hỗ trợ"
      subTitle="Thoả sức học tập và kết nối"
      backgroundColor="#FF9966"
    >
      <div 
        className="flex w-full flex-col items-center justify-center gap-2 md:gap-6">
        <div className="flex gap-2 md:gap-7"  ref={sectionRef}>
          {keys.map((item) => (
            <button
              key={item.value}
              className={cn(
                "rounded-md border-2 border-black px-4 md:px-7 py-1 transition duration-300 hover:bg-secondary-foreground hover:text-white",
              )}
              style={{
                background: turn.key === item.value ? "#000" : "#f5f3ea",
                color: turn.key === item.value ? "#fff" : "#000"
              }}
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
