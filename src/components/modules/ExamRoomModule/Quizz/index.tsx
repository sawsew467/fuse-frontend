import { useEffect, useState } from "react";
import QuestionPulling, { Poll } from "./PollingQuestion";

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

const Quiz = ({ userId }: QuizProps) => {
  const [timeRemaining, setTimeRemaining] = useState(25);
  const [timerRunning, setTimerRunning] = useState(false);

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

  return (
    <div className="absolute left-1/2 top-24 w-3/4 -translate-x-1/2 transform border-2 border-black shadow-3d-dark">
      <QuestionPulling
        question={fakePoll.question}
        options={fakePoll.options}
      />
    </div>
  );
};

export default Quiz;
