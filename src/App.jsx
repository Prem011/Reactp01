import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingPage from './components/LandingPage';
import { Route, Routes } from 'react-router-dom';
import GameOne from './components/SubContent/GameOne';
import GameTwo from './components/SubContent/GameTwo';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {

  return (
    <div className="h-screen w-full "> {/* Tailwind CSS for full height and padding */}

      <Routes>
        <Route path="/" element={<LandingPage/>}  />
        <Route path="/gameOne" element={<GameOne/>}  />
        <Route path="/gameTwo" element={<GameTwo/>}  />
      </Routes>
     
    </div>
  );
};

export default ScrollAnimation;
