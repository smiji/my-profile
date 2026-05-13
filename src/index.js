import React from 'react';
import ReactDOM from 'react-dom/client';

import Education from './components/Education';
import TabbedExperience from './components/TabbedExperience';
import {
  ExperienceChartExperience,
  ExperienceChartPie,
} from './components/ExperienceChartHandler';
import TabbedReference from './components/TabbedReference';
import Profile from './components/Profile';
import DraggableItem from './components/DraggableItem';
import ProfileImage from './components/ProfileImage';
import Skills from './components/Skills';
import Header from './components/Header';
import ChartExperience from './components/ChartExperience';
import ChartPieTechnologies from './components/ChartPieTechnologies';

// Placeholder imports for new components
// You need to create these files/components
// import ImageComponent from './components/ImageComponent';
// import Skills from './components/Skills';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Chart1 from './components/Chart1';
// import Chart2 from './components/Chart2';
import { DndContext, closestCenter } from '@dnd-kit/core';

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';

//data from json files
import educationEntries from './data/education.json';
import experienceEntries from './data/experience.json';
import referenceEntries from './data/reference.json';
import profileSummary from './data/profilesummary.json';
import skillsData from './data/skills-all.json';
import headerData from './data/header.json';

import tcsClients from './data/chart-experience-tcs.json';
import luxoftClients from './data/chart-experience-luxoft.json';
import ascendionClients from './data/chart-experience-ascendion.json';
import './index.css';

function App() {
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

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (leftItems.includes(active.id) && leftItems.includes(over?.id)) {
      if (over && active.id !== over.id) {
        setLeftItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      return;
    }
    if (centerItems.includes(active.id) && centerItems.includes(over?.id)) {
      if (over && active.id !== over.id) {
        setCenterItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      return;
    }
    if (rightItems.includes(active.id) && rightItems.includes(over?.id)) {
      if (over && active.id !== over.id) {
        setRightItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
      return;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <Header /> */}
      <header className="bg-gray-800 text-white py-4 text-center text-2xl font-bold">
        <Header {...headerData} />
      </header>

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

      {/* Footer */}
      {/* <Footer /> */}
      <footer className="bg-gray-800 text-white py-2 text-center">
        Footer
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
