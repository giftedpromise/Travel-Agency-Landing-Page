import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/page-layout/HeroSection";
import "./index.css";

function App() {
  return (
    <main className="font-poppins relative md:px-[9rem]">
      <NavBar />
      <div className="flex flex-col gap-[7.69rem] px-4">
        <HeroSection />
        <div className="absolute right-0 top-0 -z-10">
          <img src="/images/blob-shape.png" alt="blob background shape" />
        </div>
        <div className="absolute left-0 top-0 -z-10">
          <img
            src="/images/top-left-gradient.png"
            alt="blob background shape"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
