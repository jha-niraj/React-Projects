import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';

// Importing small components to render it on the Screen:
import Accordian from "./projects/Accordian/index";
import RandomColor from './projects/Random Color/randomColor';
import GitProfileFinder from './projects/GitProfileFinder';

const  App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accordian" element={<Accordian />} />
      <Route path="/randomcolor" element={<RandomColor />} />
      <Route path="/gitprofilefinder" element={<GitProfileFinder />} />
    </Routes>
  )
}

export default App
