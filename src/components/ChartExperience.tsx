import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryAxis,
  VictoryStack
} from "victory";

type ChartExperienceProps = {
  experienceTCS: ExperienceData[];
  experienceLuxoft: ExperienceData[];
  experienceAscendion: ExperienceData[];
  width: number;
  height: number;
};
type ExperienceData = {
  x: string;
  y: number;
  label: string;
};



const ChartExperience: React.FC<ChartExperienceProps> = ({experienceTCS, experienceLuxoft, experienceAscendion, width , height }) => {
  const tcsClients = experienceTCS;
  const luxoftClients = experienceLuxoft;
  const ascendionClients = experienceAscendion;
  const baseFontSize = 14;
  const scale = width / 400; // Base width is 400, scale accordingly
  const scaledFontSize = baseFontSize * scale;

  return (
  <VictoryChart width={width} height={height} theme={VictoryTheme.material} domainPadding={{x:80}}>
  <VictoryAxis
  label="Company"
  style={{
      axisLabel: { fill: "blue", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 },
      tickLabels: { fill: "green", fontSize: scaledFontSize, fontWeight: "bold", angle: 0 }
  }}
/>
  <VictoryAxis dependentAxis label="Duration (years)" style={{
    axisLabel: { fill: "blue", fontSize: scaledFontSize, fontWeight: "bold", padding: 25 },
    tickLabels: { fill: "green", fontSize: scaledFontSize, fontWeight: "bold", angle: 0 }
  }}/>
  <VictoryStack colorScale={["#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#c0504d"]}>  
    <VictoryBar
      data={[tcsClients[0] && tcsClients[0].x ? tcsClients[0] : null, null, null]}
      labels={({ datum }) => datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : ""}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
    <VictoryBar
      data={[tcsClients[1] && tcsClients[1].x ? tcsClients[1] : null, null, null]}
      labels={({ datum }) => datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : ""}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
    <VictoryBar
      data={[tcsClients[2] && tcsClients[2].x ? tcsClients[2] : null, null, null]}
      labels={({ datum }) => datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : ""}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
    <VictoryBar
      data={[tcsClients[3] && tcsClients[3].x ? tcsClients[3] : null, null, null]}
      labels={({ datum }) => datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : ""}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
    <VictoryBar
      data={[tcsClients[4] && tcsClients[4].x ? tcsClients[4] : null, null, null]}
      labels={({ datum }) => datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : ""}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
    <VictoryBar
      data={[null, luxoftClients[0] && luxoftClients[0].x ? luxoftClients[0] : null, null]}
      labels={({ datum }) => datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : ""}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
    <VictoryBar
      data={[null, null, ascendionClients[0] && ascendionClients[0].x ? ascendionClients[0] : null]}
      labels={({ datum }) => {
        console.log("Label function datum:", datum);
        return datum && datum.label ? (datum.tech ? `${datum.label} (${datum.tech})` : datum.label) : "";
      }}
      labelComponent={<VictoryLabel angle={0} textAnchor="start" dx={-3} dy={10} style={{ fill: "black", fontSize: scaledFontSize, fontWeight: "bold", padding: 30 }} />}
    />
  </VictoryStack>
</VictoryChart>

);
}

export default ChartExperience;