import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Reasons from "./components/Reasons";
import Practices from "./components/Practices";
import Team from "./components/Team";
import Faqs from "./components/Faqs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="App">
        <Intro />
        <Reasons />
        <Practices />
        <Team />
        <Faqs />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default App;
