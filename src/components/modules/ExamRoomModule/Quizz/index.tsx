import React, { useState, useEffect } from "react";
import QuestionPulling, { Poll } from "../PollingQuestion";
import PollMachine from "../Polling";
import { Button } from "@/components/ui/button";

const fakePoll: Poll = {
  question: "Quả trứng có trước hay còn bò có trước ?",
  options: [
    { id: 1, text: "A", description: "Trứng", votes: [] },
    {
      id: 2,
      text: "B",
      description: "Bò.",
      votes: [],
    },
    {
      id: 3,
      text: "C",
      description: "Con gà có trước.",
      votes: [],
    },
    {
        id: 4,
        text: "D",
        description: "Con bò ăn quả trứng rồi.",
        votes: [],
      },
  ],
};

interface QuizProps {
  userId: string | undefined;
}

interface StatisTicType {
  statisticType: "option" | "chart";
}

const Quiz = ({ userId }: QuizProps) => {
  const [timeRemaining, setTimeRemaining] = useState(25);
  const [timerRunning, setTimerRunning] = useState(false);
  const [typeStatistic, setTypeStatistic] =
    useState<StatisTicType["statisticType"]>("option");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerRunning && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timerRunning, timeRemaining]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimeRemaining(25);
  };

  const handleTimeUp = () => {
    stopTimer();
    resetTimer();
    nextQuestion();
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  const nextQuestion = () => {
    resetTimer();
    startTimer();
  };

  const handleStatisticChange = () => {
    setTypeStatistic((prevType) =>
      prevType === "option" ? "chart" : "option"
    );
  };

  return (
    <div className="w-3/4 border-2 shadow-3d-dark border-black mx-auto">
        <div>
          {/* <Button className="mt-5" onClick={handleStatisticChange}>
            ĐỔI LOẠI BIỂU ĐỒ
          </Button> */}
          {!typeStatistic === "option" ? (
            <PollMachine />
          ) : (
            <QuestionPulling
              question={fakePoll.question}
              options={fakePoll.options}
            />
          )}
        </div>
    </div>
  );
};

export default Quiz;
