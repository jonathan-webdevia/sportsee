import {
  ScoreChartContainer,
  ScoreLabel,
  ScoreValue,
} from "../../utils/style/Score";

import APIClass from "../../services/APIClass";
import { useEffect, useState } from "react";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { styleVar } from "../../utils/style/styleVariables";

export function ScoreChart({ userId }) {
  const [score, setScore] = useState();

  useEffect(() => {
    const getData = new APIClass(userId, "");
    getData
      .getScore()
      .then((response) => {
        return response;
      })
      .then((data) => {
        setScore(data);
      });
  });

  const pieData = [
    { name: "completed", value: score, fillColor: `${styleVar.primaryRed}` },
    { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <ScoreChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={450}
            endAngle={45}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <ScoreLabel>
        <ScoreValue>{`${100 * score}%`}</ScoreValue>
        <br />
        de votre
        <br />
        objectif
      </ScoreLabel>
    </ScoreChartContainer>
  );
}
