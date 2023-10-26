import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Reasons from "./components/Reasons";
import Practices from "./components/Practices";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Reasons />
      <Practices />
    </div>
  );
};

export default App;
