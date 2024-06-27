import React from "react";
import MainButton from "../MainButton";

function HeroSection() {
  return (
    <section
      className="mt-16 flex items-center justify-between md:z-[9999]"
      style={{ overflowX: "hidden" }}
    >
      <div className="pt-32 md:pt-4">
        <p className="font-poppins mb-4 text-[1.128rem] font-[700] uppercase text-primary">
          Best Destinations around the world
        </p>
        <div className="flex flex-col">
          <div className="volkhov leading-large inline-flex text-[3rem] font-[700] text-lightBlue md:text-[3.8rem]">
            Travel,
            <div className="flex flex-col">
              <span className="z-10 ml-8">enjoy</span>
              <img
                src="/images/stylish-underline.png"
                alt="stylish underline"
                className="z-0 -mt-4 hidden md:block"
              />
            </div>
          </div>

          <p className="volkhov leading-large inline-flex text-[3rem] font-[700] text-lightBlue md:text-[3.8rem]">
            and live a new and full life
          </p>
        </div>

        <p className="my-[1.6rem] px-2 text-center text-[1rem] font-medium leading-[1.692rem] text-lightGray sm:px-0">
          Built Wicket longer admire do barton vanity itself do in it.
          <br className="hidden sm:block" /> Preferred to sportsmen it engrossed
          listening. Park gate sell they west hard for the.
        </p>

        <div className="flex items-center gap-6">
          <div>
            <MainButton
              text="Find out more"
              classes=""
              customStyles={{
                backgroundColor: "#F1A501",
                color: "#FFFFFF",
                fontWeight: 600,
                boxShadow: "none",
                borderRadius: "0.564rem",
                border: "none",
                width: "9.58788rem",
                height: "3rem",
                "&:hover": {
                  backgroundColor: "#F1A501",
                },
              }}
            />
          </div>
          <div className="mt-6 flex items-center hover:cursor-pointer">
            <img
              src="/images/play-shadow.png"
              alt="rounded play icon with shadow"
            />
            <p className="-mt-6 text-lightGrayAlt">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="relative hidden md:block">
        <img
          src="/images/lady-with-aircraft.png"
          alt="girl with phone with aircrafts on the background"
          className="-translate-x-20 -translate-y-2 transform" // Adjust values as needed
        />
      </div>
    </section>
  );
}

export default HeroSection;
