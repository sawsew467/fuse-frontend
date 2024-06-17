import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Chart from "@public/svgr/Chart";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Clock from "./clock";
interface PollOption {
  id: number;
  text: string;
  description: string;
  votes: string[];
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
    <div className={cn("relative h-24 w-[49%]",
      (hasVoted && !isVotedChoice) && "opacity-50"
    )}>
  <Button
      onClick={() => onVote(option.id)}
      disabled={hasVoted}
      variant={"secondary"}
      haveOverlay
      className={cn(
        "h-full absolute top-0 left-0 w-full border border-black drop-shadow-lg",
        !isVotedChoice && "opacity-70",
      )}
      
    >
     {hasVoted && (
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-r drop-shadow-2xl border border-status-offline from-white to-status-online transition-all duration-300"
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
      <div className="flex flex-col gap-4 bg-white/80 backdrop-blur-sm px-4 py-4">
        <div className="flex h-fit content-center justify-between">
          <div className="content-center p-4">
            <Clock remainingTime={20} />
          </div>
          <Image
            className="max-w-2/3 object-fit max-h-80 min-h-[250px] w-auto"
            width={200}
            height={100}
            src={
              "https://cdn.pixabay.com/photo/2023/10/10/12/36/lofi-8306352_960_720.jpg"
            }
            alt={"background room"}
          />
          <div className="w-1/6 content-center">Answered</div>
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
      <div className="flex content-center justify-between bg-status-offline px-6 py-1 font-title font-bold">
        <div className="content-center">1/30</div>
        <Button className="p-1" variant={"outline"}>
          <Chart className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default QuestionPulling;
