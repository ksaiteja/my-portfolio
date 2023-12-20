import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col w-full h-full">
        <Header />
        <Intro />
        <MySkills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
