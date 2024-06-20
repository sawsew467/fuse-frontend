import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface RenderTimeProps {
  remainingTime: number;
}

// Custom hook for rendering time
const useRenderTime = ({ remainingTime }: RenderTimeProps) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef<number | null>(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to trigger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;
  const urgencyClass = remainingTime < 10 ? "text-red-500 animate-pulse" : "";

  return {
    prevTime: prevTime.current,
    isTimeUp,
    urgencyClass,
  };
};

const Clock: React.FC<{ remainingTime: number }> = ({ remainingTime }) => {
  const { prevTime, isTimeUp, urgencyClass } = useRenderTime({ remainingTime });

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime}
          colors={["#65CCA0", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          strokeWidth={40}
          trailStrokeWidth={40}
          size={190}
          strokeLinecap="butt"
        >
          {({ remainingTime }) => (
            <div className="relative h-14 w-20 font-title text-3xl font-bold">
              <div
                key={remainingTime}
                className={`absolute inset-0 flex transform items-center justify-center transition-all duration-200 ${urgencyClass} ${
                  isTimeUp ? "-translate-y-full opacity-0" : ""
                }`}
              >
                {remainingTime}
              </div>
              {prevTime !== null && (
                <div
                  key={prevTime}
                  className={`absolute inset-0 flex transform items-center justify-center transition-all duration-200 ${
                    !isTimeUp ? "translate-y-full opacity-0" : ""
                  }`}
                >
                  {prevTime}
                </div>
              )}
            </div>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Clock;
