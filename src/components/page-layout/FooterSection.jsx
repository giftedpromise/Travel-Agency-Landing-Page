import React from "react";

function FooterSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="max-w-sm">
          <p>
            <img src="/images/logo-bottom.png" alt="footer logo" />
          </p>
          <p className="mt-[1.19rem] text-lightGray md:w-[20rem] lg:w-[24rem]">
            Book your trip in minute, get full <br /> Control for much longer.
          </p>
        </div>
        <div className="flex flex-grow justify-between gap-8 lg:ml-[-5rem]">
          {" "}
          {/* Adjusted margin for large screens */}
          <div className="flex flex-col gap-4">
            <p className="text-[1.3125rem] font-[700] text-lightBlack">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[1rem] font-normal text-lightGray">About</p>
              <p className="text-[1rem] font-normal text-lightGray">Careers</p>
              <p className="text-[1rem] font-normal text-lightGray">Mobile</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[1.3125rem] font-[700] text-lightBlack">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[1rem] font-normal text-lightGray">Help/FAQ</p>
              <p className="text-[1rem] font-normal text-lightGray">Press</p>
              <p className="text-[1rem] font-normal text-lightGray">
                Affiliates
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[1.3125rem] font-[700] text-lightBlack">More</p>
            <div className="flex flex-col gap-2">
              <p className="text-[1rem] font-normal text-lightGray">
                Airline Fees
              </p>
              <p className="text-[1rem] font-normal text-lightGray">Airline</p>
              <p className="text-[1rem] font-normal text-lightGray">
                Low Fare Tips
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/facebook-icon.png" alt="social icon" />
            <img src="/images/instagram-icon.png" alt="social icon" />
            <img src="/images/x-icon.png" alt="social icon" />
          </div>
          <p className="text-[1.25rem] font-[500] text-lightGray">
            Discover our app
          </p>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="rounded-extraLarge w-[11rem] bg-lightBlack px-[1.06rem] py-[0.58rem]">
              <div className="flex items-center gap-4">
                <img
                  src="/images/google-play-icon.png"
                  alt="google play icon"
                />
                <div>
                  <p className="text-[0.7rem] font-[700] uppercase text-white">
                    get it on
                  </p>
                  <p className="text-[0.7rem] uppercase text-white">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-extraLarge w-[11rem] bg-lightBlack px-[1.06rem] py-[0.58rem]">
              <div className="flex items-center gap-4">
                <img src="/images/app-icon.png" alt="apple store icon" />
                <div>
                  <p className="text-[0.7rem] font-[700] uppercase text-white">
                    Available on the
                  </p>
                  <p className="text-[0.7rem] uppercase text-white">
                    Apple Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="my-[5.25rem] flex justify-center text-[0.875rem] font-[600] text-lightGray">
        All rights reserved@jadoo.co
      </p>
    </section>
  );
}

export default FooterSection;
