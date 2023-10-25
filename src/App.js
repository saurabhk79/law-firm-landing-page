import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Reasons from "./components/Reasons";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Reasons />
    </div>
  );
};

export default App;
