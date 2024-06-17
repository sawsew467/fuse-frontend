import React, { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import OpenAllQuizz from "@public/svgr/OpenAllQuizz";
import PinQuizz from "@public/svgr/PinQuizz";
import PlayQuizz from "@public/svgr/PlayQuizz";
import TimeLine from "@public/svgr/Timeline";
import { cn } from "@/lib/utils";

const Timeline: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean[]>([]);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

  const timelineData = [
    {
      date: "12.03.2022",
      articles: [
        {
          title: "Behind the scenes",
          content: [
            "I tried to create a timeline with alternating positions for every even element.",
            "As you can see, on wider screens you will get the elements positioned right and left next to the timeline. However, I found other versions not perfect in terms of space management.",
            "I didn't want to create a blank space on the other side of each entry. Using JavaScript you can create overlapping heights of the elements. In this example, you see the following element overlapping the previous by 1/3 of its height.",
          ],
        },
      ],
    },
    {
      date: "02.06.2022",
      articles: [
        {
          title: "Article 2",
          content: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam distinctio alias, earum exercitationem soluta ipsam incidunt beatae quas placeat dolorem iure facilis molestias voluptate blanditiis delectus porro suscipit obcaecati.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum dolores deleniti laboriosam aut quae quos cupiditate corporis, minima officiis! Voluptatum consectetur totam beatae tenetur vero rem fugiat! Asperiores, perspiciatis.",
          ],
        },
        {
          title: "Article 3",
          content: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam distinctio alias, earum exercitationem soluta ipsam incidunt beatae quas placeat dolorem iure facilis molestias voluptate blanditiis delectus porro suscipit obcaecati.",
          ],
        },
        {
          title: "Article 4",
          content: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam distinctio alias, earum exercitationem soluta ipsam incidunt beatae quas placeat dolorem iure facilis molestias voluptate blanditiis delectus porro suscipit obcaecati.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi consectetur harum id, fugit ducimus mollitia quidem adipisci tempora rerum eos aliquid hic a laborum dicta est consequuntur modi nulla?",
          ],
        },
      ],
    },
  ];

  return (
    <section className="relative flex h-fit w-full flex-col justify-start gap-1 pl-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-black">
      {timelineData.map((group, index) => (
        <div
          key={index}
          className="collapsed relative mb-2 flex flex-col items-start"
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[index] = el;
          }}
        >
          <div>
            <div className="gap-none flex h-full w-full flex-row content-center justify-center gap-4 pt-2">
              <TimeLine className={cn("mt-10 h-20 w-20",
                 !collapsed[index] && "h-20 w-10"
              )} />
              <div className="flex h-4 w-fit flex-col gap-4 py-4">
                <Button
                  onClick={() => toggleCollapse(index)}
                  haveOverlay
                  variant={"outline"}
                >
                  {" "}
                  <OpenAllQuizz className="h-4 w-4" />
                </Button>
                <Button haveOverlay variant={"outline"}>
                  {" "}
                  <PlayQuizz className="h-4 w-4" />
                </Button>
                <Button haveOverlay variant={"outline"}>
                  <PinQuizz className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <div className={cn("relative mb-20 rounded-lg border-2  border-black p-12 ",
                  collapsed[index] ? "border-double shadow-3d" : "border-dashed"
                )}>
                  <h2 className="absolute left-4 top-[-1rem] bg-[#F9F7EF] px-2 font-title text-lg">
                    {group.date}
                  </h2>
                  <p className={cn("font-bold",  !collapsed[index] ? "mt-0 font-semibold mb-4 text-lg " : "mt-6" )}>
                    Ôn tập chương 1 : hệ điều hành。Và các tổ chức hệ vi mạch
                    trong cpu
                  </p>

                  <div
                    className={`flex flex-col gap-10 ${collapsed[index] ? "hidden" : "block"}`}
                  >
                    {group.articles.map((article, i) => (
                      <article
                        key={i}
                        className="border-2 border-black bg-white px-4 py-2"
                      >
                        <h2 className="timeline-heading">{article.title}</h2>
                        {article.content.map((paragraph, j) => (
                          <p key={j}>{paragraph}</p>
                        ))}
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
