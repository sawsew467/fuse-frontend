import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Chart from "@public/svgr/Chart";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Clock from "./clock";
import StressBar from "./stressbar";

import PollMachine from "../PollingChart";
interface PollOption {
  id: number;
  text: string;
  description: string;
  votes: string[];
}

interface StatisTicType {
  statisticType: "option" | "chart";
}

export interface Poll {
  question: string;
  options: PollOption[];
}

const Option: React.FC<{
  option: PollOption;
  totalVotes: number;
  onVote: (optionId: number) => void;
  hasVoted: boolean;
  isVotedChoice: boolean;
}> = ({ option, totalVotes, onVote, hasVoted, isVotedChoice }) => {
  return (
    <div
      className={cn(
        "relative h-24 w-[49%]",
        hasVoted && !isVotedChoice && "opacity-50",
      )}
    >
      <Button
        onClick={() => onVote(option.id)}
        disabled={hasVoted}
        variant={"secondary"}
        haveOverlay
        className={cn(
          "absolute left-0 top-0 h-full w-full border border-black drop-shadow-lg",
          !isVotedChoice && "opacity-70",
        )}
      >
        {hasVoted && (
          <div
            className="absolute inset-0 rounded-lg border border-status-offline bg-gradient-to-r from-white to-status-online drop-shadow-2xl transition-all duration-300"
            style={{
              width: `${
                totalVotes > 0 ? (option.votes.length / totalVotes) * 100 : 0
              }%`,
            }}
          ></div>
        )}
      </Button>
      <div className="absolute left-5 top-5 z-10">
        <p className="text-black">{option.description}</p>
      </div>

      {hasVoted && (
        <div className="z-2 absolute right-10 top-8 rounded-lg bg-gray-300 p-2 text-sm font-semibold">
          {option.votes.length} / {totalVotes}
        </div>
      )}
    </div>
  );
};

const QuestionPulling = (PollData: Poll) => {
  const [poll, setPoll] = useState<Poll | null>(PollData);
  const [username, setUsername] = useState<string>("user1");
  const [voted, setVoted] = useState<boolean>(false);
  const [typeStatistic, setTypeStatistic] =
    useState<StatisTicType["statisticType"]>("option");

  const handleStatisticChange = () => {
    setTypeStatistic((prevType) =>
      prevType === "option" ? "chart" : "option",
    );
  };

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
        <span className="font-title text-xl font-semibold">
          Con bò có trước hay quả trứng gà có trước ???
        </span>
      </div>
      {typeStatistic == "option" ? (
        <>
          <div className="flex flex-col gap-4 bg-white/80 px-4 py-4 backdrop-blur-sm">
            <div className="flex h-fit content-center justify-between">
              <div className="content-center p-4">
                <Clock remainingTime={20} />
              </div>
              <Image
                className="max-w-2/3 object-fit max-h-70 min-h-[200px] w-auto"
                width={200}
                height={100}
                src={
                  "https://cdn.pixabay.com/photo/2023/10/10/12/36/lofi-8306352_960_720.jpg"
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
      ) : (
        <PollMachine></PollMachine>
      )}
      <div className="flex content-center justify-between bg-status-offline px-6 py-1 font-title font-bold">
        <Button
          className="p-1"
          haveOverlay
          variant={"outline"}
          onClick={() => {
            handleStatisticChange();
          }}
        >
          <Chart className="h-8 w-8" />
        </Button>
        <div className="content-center">1/30</div>
      </div>
    </div>
  );
};

export default QuestionPulling;
