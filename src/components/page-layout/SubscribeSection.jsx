import React from "react";
import Input from "../ui/Input";
import MainButton from "../MainButton";

const SubscribeSection = () => {
  return (
    <div
      className="relative bg-[#DFD7F9] p-[2rem] lg:-mt-[10rem] lg:p-[4rem]"
      style={{
        borderRadius: "20px 129px 20px 20px",
      }}
    >
      <div className="z-20">
        <p className="font-poppins mb-[2.63rem] text-center text-[1.5rem] font-[600] text-lightGray">
          Subscribe to get information, latest news and other{" "}
          <br className="hidden md:block" /> interesting offers about Jadoo
        </p>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="relative z-[10] w-full flex-grow md:w-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="h-[3.5rem] w-full border-none bg-white pl-[3rem] md:w-auto lg:w-full"
            />
            <div className="absolute left-4 top-5">
              <img src="/images/envelop.png" alt="envelope icon" />
            </div>
          </div>

          <MainButton
            text="Subscribe"
            classes="w-[9.25rem] h-[3.25rem] z-[10] red-gradient"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-4 z-0 opacity-25">
        <img
          src="/images/round-ring-left.png"
          alt="round ring left"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -right-4 -top-4">
        <img src="/images/send-shape.png" alt="send icon" />
      </div>

      <div className="absolute right-0 top-0 opacity-25">
        <img
          src="/images/round-ring-right.png"
          alt="round ring right"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -bottom-16 right-[-6rem] hidden md:block">
        <img src="/images/plus-group.png" alt="send icon" />
      </div>
    </div>
  );
};

export default SubscribeSection;
