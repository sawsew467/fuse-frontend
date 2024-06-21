import React, { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import Chart from "@public/svgr/Chart";
import Image from "next/image";
import Clock from "./clock";
import StressBar from "./stressbar";

import FlipClock from "../Clock";
import PollMachine from "../PollingChart";
import ScrollingText from "./scrollingtxt";
import { Option } from "./option";

export interface PollOption {
  id: number;
  text: string;
  description: string;
  votes: string[];
}

export interface StatisTicType {
  statisticType: "option" | "chart" | "clock";
}

export interface Poll {
  question: string;
  options: PollOption[];
}



const QuestionPulling = (PollData: Poll) => {
  const [poll, setPoll] = useState<Poll | null>(PollData);
  const [username, setUsername] = useState<string>("user1");
  const [voted, setVoted] = useState<boolean>(false);
  const [typeStatistic, setTypeStatistic] = useState<
    StatisTicType["statisticType"]
  >( "option");
  

  const handleStatisticChange = () => {
    setTypeStatistic((prevType) =>
      prevType === "option" ? "chart" : "option",
    );
  };

  const handleTimeRemainingChange = () => {
    setTypeStatistic((prevType) =>
      prevType === "option" ? "clock" : "option",
    );
  };


  useEffect(() => {
    var currenPath =  window.location.href;

    if (currenPath.includes("offline")) {
      setTypeStatistic("clock");
    } else {
      setTypeStatistic("option");
    }
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      randomVote();
    }, 500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [poll]);

  const totalVotes = useMemo(() => {
    return (
      poll?.options?.reduce((acc, option) => acc + option.votes.length, 0) ?? 0
    );
  }, [poll]);

  const handleVote = (optionId: number) => {
    if (!poll) return;

    const newPoll = { ...poll };
    const option = newPoll?.options?.find((option) => option.id === optionId);
    if (option) {
      option.votes.push(username);
      setPoll(newPoll);
      setVoted(true);
    }
  };

  const handleVoteRandom = (optionId: number) => {
    if (!poll) return;

    const newPoll = { ...poll };
    const option = newPoll?.options?.find((option) => option.id === optionId);
    if (option) {
      option.votes.push("random-user");
      setPoll(newPoll); // Update state to trigger re-render
    }
  };

  const randomVote = () => {
    if (!poll) return;

    const randomOptionId = Math.floor(Math.random() * poll.options.length) + 1;
    handleVoteRandom(randomOptionId);
  };

  return (
    <div className="h-fit w-full">
      <div className="text-md border-b-2 border-status-offline bg-[#FFF380] px-4 py-8 text-center drop-shadow-xl">
        {typeStatistic != "clock" && (
          <span className="font-title text-xl font-semibold">
            {poll?.question}
          </span>
        )}
      </div>
      {typeStatistic == "option" && (
        <>
          <div className="flex flex-col gap-4 bg-white/80 px-4 py-4 backdrop-blur-sm">
            <div className="flex h-fit content-center justify-between">
              <div className="content-center p-4">
                <Clock remainingTime={20} />
              </div>
              <Image
                className="max-w-2/3 object-fit max-h-[222px] min-h-[200px] w-auto"
                width={200}
                height={100}
                unoptimized
                src={
                  "https://miro.medium.com/v2/resize:fit:1400/0*_G1LMTJu2SKIFrmw.gif"
                }
                alt={"background room"}
              />
              <StressBar />
            </div>
            <div className="flex w-full flex-wrap justify-center gap-4 font-title">
              {poll?.options?.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  totalVotes={totalVotes}
                  onVote={handleVote}
                  hasVoted={voted}
                  isVotedChoice={option.votes.includes(username)}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {typeStatistic == "chart" && <PollMachine></PollMachine>}

      {typeStatistic == "clock" && <FlipClock />}
      <div className="flex content-center justify-between bg-status-offline px-6 py-2 font-title font-bold">
        {typeStatistic == "clock" && <ScrollingText />}
        {typeStatistic != "clock" && (
          <>
            <div className="flex gap-4">
              <Button
                className="p-1 "
                disabled={!voted}
                haveOverlay
                variant={"outline"}
                
                onClick={() => {
                  handleStatisticChange();
                }}
              >
                <Chart className="h-8 w-8" />
              </Button>
            </div>

            <div className="content-center">Câu hỏi số : 1/30</div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPulling;
