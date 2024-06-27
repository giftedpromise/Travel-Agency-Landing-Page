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
      <NavBar />
      <div className="mx-auto max-w-screen-xl px-4">
        <HeroSection />
        <CategorySection />
        <SellingSection />
        <BookNextTripSection />
        <TestimonialSection />
        <LogoGroupSection />
        <SubscribeSection />
        <FooterSection />
      </div>
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 -z-10">
        <img src="/images/blob-shape.png" alt="blob background shape" />
      </div>
      <div className="absolute left-0 top-0 -z-10">
        <img src="/images/top-left-gradient.png" alt="blob background shape" />
      </div>
      <div className="absolute right-0 top-0">
        <img src="/images/plus-group.png" alt="plus group" />
      </div>
    </main>
  );
}

export default App;
