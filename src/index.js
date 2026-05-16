import React from 'react';
import ReactDOM from 'react-dom/client';

import MenuBar from './components/MenuBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

import headerData from './data/header.json';
import experienceData from './data/experience.json';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <Header /> */}
      <header className="bg-gray-800 text-white py-4 text-center text-2xl font-bold">
        <Header {...headerData} />
      </header>
      <MenuBar />

      <AboutMe />
      {/* Footer */}
      {/* <Footer /> */}
      <footer className="bg-gray-800 text-white py-2 text-center"></footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
