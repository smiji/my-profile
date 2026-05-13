import React, { useState } from 'react';
import TabbedExperience from './TabbedExperience';
import ChartPieTechnologies from './ChartPieTechnologies';
import experienceEntries from '../data/experience.json';
import technologiesAsendion from '../data/pie-chart-experience-ascendion.json';
import technologiesLuxoft from '../data/pie-chart-experience-luxoft.json';  
import technologiesTCS from '../data/pie-chart-experience-tcs.json';

// Technology data for each experience (index matches experienceEntries)
const technologiesPerExperience = [
  technologiesAsendion,
  technologiesLuxoft,
  technologiesTCS,
];

type ExperienceChartExperienceProps = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export function ExperienceChartExperience({ activeTab, setActiveTab }: ExperienceChartExperienceProps) {
  return (
    <TabbedExperience
      experiences={experienceEntries}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}

type ExperienceChartPieProps = {
  activeTab: number;
};

export function ExperienceChartPie({ activeTab }: ExperienceChartPieProps) {
  console.log('Rendering ExperienceChartPie with activeTab:', activeTab);
  return (
    <ChartPieTechnologies
      data={technologiesPerExperience[activeTab]}
      width={400}
      height={400}
    />
  );
}

