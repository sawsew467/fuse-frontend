"use client";
import Section from "@/components/ui/section";
import React from "react";
import FlashCardSection from "./FlashCardSection";
import HighlightRooms from "./HighlightRooms";
import HighlightExamRooms from "./HighlightExamRooms";

function HomeModule() {
  return (
    <Section title="Trang chủ" subTitle="Thỏa sức học tập, thỏa sức khám phá">
      <div className="flex h-fit w-full flex-col gap-[60px]">
        <FlashCardSection />
        <HighlightExamRooms />
        <HighlightRooms />
      </div>
    </Section>
  );
}

export default HomeModule;
