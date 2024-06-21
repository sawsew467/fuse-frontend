import { useEffect, useState } from "react";
import QuestionPulling, { Poll } from "./PollingQuestion";

const fakePoll: Poll = {
  question: "What is the primary function of the CPU (Central Processing Unit) in a computer?",
  options: [
    { id: 1, text: "A", description: "To store data and programs temporarily", votes: [] },
    {
      id: 2,
      text: "B",
      description: "To manage and coordinate all computer components.",
      votes: [],
    },
    {
      id: 3,
      text: "C",
      description: "To execute instructions and process data.",
      votes: [],
    },
    {
      id: 4,
      text: "D",
      description: "To provide long-term data storage.",
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
