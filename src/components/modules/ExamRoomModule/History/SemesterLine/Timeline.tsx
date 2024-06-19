import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import OpenAllQuizz from "@public/svgr/OpenAllQuizz";
import PinQuizz from "@public/svgr/PinQuizz";
import PlayQuizz from "@public/svgr/PlayQuizz";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { FlashcardArray } from "react-quizlet-flashcard";

type Question = {
  question: string;
  answers: string[];
  key: string;
};

type TimelineItem = {
  date: string;
  title: string;
  questions: Question[];
};

type TimelineProps = {
  data: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [collapsed, setCollapsed] = React.useState<boolean[]>([]);
  const [activeSection, setActiveSection] = React.useState<number | null>(null);
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const articles = document.getElementsByClassName("collapsed");
    setCollapsed(new Array(articles.length).fill(true)); // Initially collapse all date groups

    const handleScroll = () => {
      let currentSection = null;
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = index;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCollapse = (index: number) => {
    setCollapsed((prev) =>
      prev.map((isCollapsed, i) => (i === index ? !isCollapsed : isCollapsed)),
    );
    setActiveSection(index); // Set active section when toggling
  };

  return (
    <section className="relative flex h-fit w-full flex-col justify-start gap-1 pl-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-black">
      {data.map((group, index) => (
        <div
          key={index}
          className="collapsed relative mb-2 flex flex-col items-start transition-all"
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[index] = el;
          }}
        >
          <div>
            <div className="gap-none flex h-full w-full flex-row content-center justify-center gap-4 pt-2">
              <div className="mt-20 flex content-center justify-center">
                <div
                  className={cn(
                    "h-3 w-3 rounded-sm border-4 border-black/80 bg-white",
                    !collapsed[index] && "",
                  )}
                ></div>
                <div
                  className={cn(
                    "mt-1 h-1 w-10 bg-black/80",
                    !collapsed[index] && "w-0 transition-shadow",
                  )}
                ></div>
                <div
                  className={cn(
                    "h-3 w-3 rounded-sm border-4 border-black/80 bg-white ease-in-out",
                    !collapsed[index]
                      ? "animate-jump-out transition duration-500"
                      : "animate-jump-in transition duration-500",
                  )}
                ></div>
              </div>
              <div
                className={cn(
                  "flex h-4 w-fit flex-col gap-4 py-4",
                  !collapsed[index] && "sticky top-20",
                )}
              >
                <Button
                  onClick={() => toggleCollapse(index)}
                  haveOverlay
                  variant={"outline"}
                >
                  <OpenAllQuizz className="h-4 w-4" />
                </Button>

                <Dialog>
                  <DialogTrigger>
                    <Button haveOverlay variant={"outline"}>
                      <PlayQuizz className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-2">{group.title}</DialogTitle>
                      <FlashcardArray
                        frontContentStyle={{
                          backgroundColor: "primary",
                          textAlign: "center",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        backContentStyle={{
                          textAlign: "center",
                          padding: 20,
                          backgroundColor: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center", // Căn giữa cả chiều ngang và chiều dọc
                        }}
                        cards={group?.questions?.map((question, index) => ({
                          id: index + 1, // Adjust id as needed
                          frontHTML: (
                            <div>
                              <h2 className="timeline-heading mb-4 border-b-4 border-dashed border-white pb-2">
                                {question.question}
                              </h2>
                              {question.answers.map((answer, j) => (
                                <p className="p-1" key={j}>
                                  {String.fromCharCode(97 + j)}. {answer}
                                </p>
                              ))}
                            </div>
                          ),
                          backHTML: <p>{question.key}</p>,
                        }))}
                      />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Button haveOverlay variant={"outline"}>
                  <PinQuizz className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <div
                  className={cn(
                    "relative mb-20 min-h-[143px] w-[800px] rounded-lg border-2 border-black p-[46px]",
                    collapsed[index]
                      ? "border-double shadow-3d transition duration-500 animate-accumulate"
                      : "w-[850px] border-dashed transition duration-500 animate-add",
                  )}
                >
                  <h2 className="absolute left-4 top-[-1rem] bg-[#F9F7EF] px-2 font-title text-lg">
                    {group.date}
                  </h2>
                  <p
                    className={cn(
                      "line-clamp-2 text-center font-bold",
                      !collapsed[index] ? "text-lg font-semibold" : "",
                    )}
                  >
                    {group.title}
                  </p>

                  <div
                    className={`flex flex-col gap-10 ${collapsed[index] ? "hidden" : "block"}`}
                  >
                    {group.questions.map((question, i) => (
                      <article
                        key={i}
                        className="border-2 border-black bg-white px-4 py-2 shadow-3d"
                      >
                        <h2 className="timeline-heading mb-2 border-b-2 border-dashed border-black text-center">
                          {question.question}
                        </h2>
                        {question.answers.map((answer, j) => (
                          <p className="p-1" key={j}>
                            {String.fromCharCode(97 + j)}. {answer}
                          </p>
                        ))}
                        <Separator />
                        <div className="group-hover group relative">
                          <span className="top-0 p-2 opacity-100 transition-opacity duration-100 hover:hidden group-hover:hidden">
                            Xem kết quả
                          </span>
                          <span className="left-0 top-0 font-semibold opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                            Correct Answer: {question.key}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
