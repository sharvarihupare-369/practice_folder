import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { generateRandomColors } from "../randomColor";

const RadarChart = () => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Radar Chart Scores",
    },
  };
  const labels = [
    "Debugging",
    "Coding Skills",
    "Typescript",
    "Cypress",
    "Communication Skills",
    "Interviewing Skill",
    "Non Tech - First Impression",
    "React",
    "Conceptual Understanding",
  ];

  const randomData = labels.map(() =>Math.floor(Math.random() * 101)); // Use faker.random.number()

  const data = {
    
      labels,
      datasets: [
        {
          label: "Dataset-1",
          data: labels.map(()=> faker.datatype.number({min:0,max:101})),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        }
      ],
    
}

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
