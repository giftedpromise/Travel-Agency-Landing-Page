import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/page-layout/HeroSection";
import CategorySection from "./components/page-layout/CategorySection";
import SellingSection from "./components/page-layout/SellingSection";
import BookNextTripSection from "./components/page-layout/BookNextTripSection";
import TestimonialSection from "./components/page-layout/TestimonialSection";
import LogoGroupSection from "./components/page-layout/LogoGroupSection";
import SubscribeSection from "./components/page-layout/SubscribeSection";
import FooterSection from "./components/page-layout/FooterSection";
import "./index.css";

function App() {
  return (
    <main className="font-poppins relative md:px-[9rem]">
      <style>
        {`
          @media screen and (max-width: 768px) {
            body {
              overflow-x: hidden; /* Hide horizontal overflow on small screens */
            }
          }
        `}
      </style>
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
        <div className="relative">
          <CategorySection />
          <div className="absolute right-0 top-0">
            <img src="/images/plus-group.png" alt="blob background shape" />
          </div>
        </div>
      </div>
      <div className="mb-48 mt-20 md:mt-44">
        {" "}
        <SellingSection />
      </div>
      <div className="mt-44">
        {" "}
        <BookNextTripSection />
      </div>
      <div className="mt-18 md:mt-44">
        {" "}
        <TestimonialSection />
      </div>
      <div className="mb-28 mt-28">
        {" "}
        <LogoGroupSection />
      </div>
      <div className="mx-auto mb-48 max-w-[90vw]">
        {" "}
        <SubscribeSection />
      </div>
      <FooterSection />
    </main>
  );
}

export default App;
