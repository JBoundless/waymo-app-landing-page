import React from "react";
import "./style.css";
import Hero from './Components/Hero.js';
import Timer from './Components/Timer.js';
import Features from './Components/Features.js'

export default function App() {
  return (
    <div>
      <Hero />
      <Features />
      <Timer />
    </div>
  );
}
