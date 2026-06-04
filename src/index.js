import React from 'react';
import ReactDOM from 'react-dom/client';

import MenuBar from './components/MenuBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import headerData from './data/header.json';
import experienceData from './data/experience.json';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white py-4 text-center text-2xl font-bold">
          <Header {...headerData} />
        </header>
        <MenuBar />
        <main className="flex-1">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-2 text-center"></footer>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
