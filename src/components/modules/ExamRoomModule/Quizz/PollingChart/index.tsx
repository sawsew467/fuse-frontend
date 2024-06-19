import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect, useRef, useState } from "react";

// Register the required components of Chart.js
Chart.register(...registerables);
Chart.register(ChartDataLabels);

const PollMachine: React.FC = () => {
  const [resultA, setResultA] = useState<number>(0);
  const [resultB, setResultB] = useState<number>(0);
  const [resultC, setResultC] = useState<number>(0);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (ctx && !chartInstance.current) {
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["A", "B", "C", "D"],
          datasets: [
            {
              label: "",
              data: [resultA, resultB, resultC, resultB],
              backgroundColor: ["#56A3A6", "#DB504A", "#E3B505"],
              borderColor: ["gray", "gray", "gray"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true, // Display the legend
              position: "top", // Position the legend at the top
              labels: {
                boxWidth: 0,
              },
            },
            tooltip: { enabled: false },
            datalabels: {
              display: true,
              color: "black",
              anchor: "end",
              align: "end",
              formatter: (value) => value.toString(),
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = [resultA, resultB, resultC];
      chartInstance.current.update();
    }
  }, [resultA, resultB, resultC]);

  useEffect(() => {
    const interval = setInterval(() => {
      const choice = Math.floor(Math.random() * 3);
      if (choice === 0) setResultA((prev) => prev + 1);
      if (choice === 1) setResultB((prev) => prev + 1);
      if (choice === 2) setResultC((prev) => prev + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-fit flex-col items-center justify-center">
      <div className="mt-10">
        <canvas ref={chartRef} id="r-chart"></canvas>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 items-center justify-items-center gap-4">
        <h3 className="r-header mt-8 text-lg">Results:</h3>
        <div className="flex space-x-4">
          <p id="a-text" className="results text-xl">
            {resultA}
          </p>
          <p id="b-text" className="results text-xl">
            {resultB}
          </p>
          <p id="c-text" className="results text-xl">
            {resultC}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PollMachine;
