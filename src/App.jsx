import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';

// Importing small components to render it on the Screen:
import Accordian from "./components/Accordian/index";
import RandomColor from './components/Random Color/randomColor';
import GitProfileFinder from './components/GitProfileFinder';

const  App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/accordian" element={<Accordian />} />
      <Route path="/randomcolor" element={<RandomColor />} />
      <Route path="/gitprofilefinder" element={<GitProfileFinder />} />
    </Routes>
  )
}

export default App
