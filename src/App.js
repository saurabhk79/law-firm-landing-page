import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
    </div>
  );
};

export default App;
