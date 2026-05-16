import React from 'react';
import ReactDOM from 'react-dom/client';

import Education from './Education';
import TabbedExperience from './TabbedExperience';
import {
  ExperienceChartExperience,
  ExperienceChartPie,
} from './ExperienceChartHandler';
import TabbedReference from './TabbedReference';
import Profile from './Profile';
import DraggableItem from './DraggableItem';
import ProfileImage from './ProfileImage';
import Skills from './Skills';
import ChartExperience from './ChartExperience';
import ChartPieTechnologies from './ChartPieTechnologies';

// Placeholder imports for new components
// You need to create these files/components
// import ImageComponent from './components/ImageComponent';
// import Skills from './components/Skills';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Chart1 from './components/Chart1';
// import Chart2 from './components/Chart2';
import { DndContext, closestCenter,DragEndEvent } from '@dnd-kit/core';

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';

//data from json files
import educationEntries from '../data/education.json';
import experienceEntries from '../data/experience.json';
import referenceEntries from '../data/reference.json';
import profileSummary from '../data/profilesummary.json';
import skillsData from '../data/skills-all.json';

import tcsClients from '../data/chart-experience-tcs.json';
import luxoftClients from '../data/chart-experience-luxoft.json';
import ascendionClients from '../data/chart-experience-ascendion.json';


function AboutMe() {
  const [enlargedChart, setEnlargedChart] = React.useState(false);
  const [enlargedPie, setEnlargedPie] = React.useState(false);
  const [leftItems, setLeftItems] = React.useState(['image', 'skills']);
  const [centerItems, setCenterItems] = React.useState([
    'profile',    
    'experience',
    'education',
    'reference',
  ]);
  const [rightItems, setRightItems] = React.useState(['chart1', 'chart2']);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : undefined;
    if (leftItems.includes(activeId) && leftItems.includes(overId || "")) {
      if (over && activeId !== overId) {
        setLeftItems((items) => {
          const oldIndex = items.indexOf(activeId);
          const newIndex = items.indexOf(overId!);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      return;
    }
    if (centerItems.includes(activeId) && centerItems.includes(overId || "")) {
      if (over && activeId !== overId) {
        setCenterItems((items) => {
          const oldIndex = items.indexOf(activeId);
          const newIndex = items.indexOf(overId!);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      return;
    }
    if (rightItems.includes(activeId) && rightItems.includes(overId || "")) {
      if (over && activeId !== overId) {
        setRightItems((items) => {
          const oldIndex = items.indexOf(activeId);
          const newIndex = items.indexOf(overId!);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      return;
    }
  };

return (
    <div className="min-h-screen flex flex-col">
{/* Main content: 3 columns */}
      <main className="flex-1 grid grid-cols-[20%_60%_20%] gap-2 px-4 py-8 bg-grey-100">
        {/* Left column: draggable image and skills */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={leftItems}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {leftItems.map((item) => {
                if (item === 'image') {
                  return (
                    <DraggableItem id="image" key="image">
                      <div className="bg-transparent p-4 rounded shadow text-center">
                        <ProfileImage />
                      </div>
                    </DraggableItem>
                  );
                }
                if (item === 'skills') {
                  return (
                    <DraggableItem id="skills" key="skills">
                      {/* <Skills /> */}
                      <div className="bg-white p-4 rounded shadow text-center">
                        <Skills skillsGroups={skillsData} />
                      </div>
                    </DraggableItem>
                  );
                }
                return null;
              })}
            </div>
          </SortableContext>
        </DndContext>

        {/* Center column: draggable main sections */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={centerItems}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {centerItems.map((item) => {
                if (item === 'profile') {
                  return (
                    <DraggableItem id="profile" key="profile">
                      <Profile profile={profileSummary} />
                    </DraggableItem>
                  );
                }
                if (item === 'experience') {
                  return (
                    <DraggableItem id="experience" key="experience">
                      <ExperienceChartExperience
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </DraggableItem>
                  );
                }
                if (item === 'education') {
                  return (
                    <DraggableItem id="education" key="education">
                      <Education entries={educationEntries} />
                    </DraggableItem>
                  );
                }
                if (item === 'reference') {
                  return (
                    <DraggableItem id="reference" key="reference">
                      <TabbedReference referenceEntries={referenceEntries} />
                    </DraggableItem>
                  );
                }
                return null;
              })}
            </div>
          </SortableContext>
        </DndContext>

        {/* Right column: draggable charts */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={rightItems}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {rightItems.map((item) => {
                if (item === 'chart1') {
                  return (
                    <DraggableItem id="chart1" key="chart1">
                      {/* <Chart1 /> */}
                      <div
                        className={`bg-white p-0 rounded shadow text-left transition-transform duration-300 flex justify-start ${enlargedChart ? 'scale-150 z-70' : ''}`}
                        style={{
                          cursor: 'pointer',
                          position: enlargedChart ? 'relative' : 'static',
                        }}
                        onClick={() => setEnlargedChart((prev) => !prev)}
                      >
                        <ChartExperience
                          experienceTCS={tcsClients}
                          experienceLuxoft={luxoftClients}
                          experienceAscendion={ascendionClients}
                          width={enlargedChart ? 800 : 400}
                          height={enlargedChart ? 600 : 400}
                        />
                      </div>
                    </DraggableItem>
                  );
                }
                if (item === 'chart2') {
                  return (
                    <DraggableItem id="chart2" key="chart2">
                      <div
                        className={`bg-white p-0 rounded shadow text-center transition-transform duration-300 ${enlargedPie ? 'scale-150 z-70' : ''}`}
                        style={{
                          cursor: 'pointer',
                          position: enlargedPie ? 'relative' : 'static',
                        }}
                        onClick={() => setEnlargedPie((prev) => !prev)}
                      >
                        <ExperienceChartPie activeTab={activeTab} />
                      </div>
                    </DraggableItem>
                  );
                }
                return null;
              })}
            </div>
          </SortableContext>
        </DndContext>
      </main>
      </div>
)};
export default AboutMe;