import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

type ChartPieTechnologiesProps = {
  data: { 
      x: string; 
      y: number }[];
  width: number;
  height: number;
};



const ChartPieTechnologies: React.FC<ChartPieTechnologiesProps> = ({ data, width, height }) => {
  const baseFontSize = 10;
  const scale = width / 400; // Base width is 400, scale accordingly
  const scaledFontSize = baseFontSize * scale;

  return (
    <VictoryPie
      data={data}
      colorScale={["#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#c0504d"]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      labelComponent={<VictoryLabel style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold" }} />}
      width={width}
      height={height}
    />
  );
} 

export default ChartPieTechnologies;
