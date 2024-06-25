import React from "react";
import MainButton from "../MainButton";

function HeroSection() {
  return (
    <section className="mt-16 flex items-center justify-between md:z-[9999]">
      <div className="pt-32 md:pt-4">
        <p className="font-poppins mb-4 text-[1.25rem] font-[700] uppercase text-primary">
          Best Destinations around the world
        </p>

        <div className="flex flex-col">
          <div className="volkhov leading-large custom-text-style inline-flex text-[5.25rem] font-[700] text-lightBlue md:text-[4.73756rem]">
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

          <p className="volkhov leading-large custom-text-style inline-flex text-[5.25rem] font-[700] text-lightBlue md:text-[4.73756rem]">
            and live a new and full life
          </p>
        </div>

        <p className="my-[1.6rem] text-[1rem] font-bold leading-[1.692rem] text-lightGray">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="flex items-center gap-6">
          <div>
            <MainButton
              text="Find out more"
              classes="bg-secondary text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary hover:bg-opacity-90 w-[9.58788rem] h-[3rem]"
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
      <div className="hidden md:block">
        <img
          src="/images/lady-with-aircraft.png"
          alt="girl with phone with aircrafts on the background"
        />
      </div>
    </section>
  );
}

export default HeroSection;
