import React, { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import MainButton from "./MainButton"; // Importing a custom button component

function NavBar() {
  const [menu, setMenu] = useState(false); // State to manage the menu's open/close status
  const toggleMenu = () => {
    setMenu(!menu); // Function to toggle the menu state
  };

  return (
    <div className="z-20 md:top-0 md:shadow-none">
      {/* DESKTOP VIEW */}
      <div className="animate-in fade-in zoom-in hidden p-4 lg:block">
        <div className="flex items-center justify-between">
          <div>
            <img src="/images/logo.png" alt="logo" /> {/* Logo */}
          </div>
          <div className="flex select-none items-center gap-[20px] text-[16px] xl:gap-[50px]">
            {/* Navigation links */}
            <p className="flex cursor-pointer items-center gap-2 font-google-sans text-17px font-normal text-navText hover:text-primary">
              Destinations
            </p>

            <p className="flex cursor-pointer items-center gap-2 font-google-sans text-17px font-normal text-navText hover:text-primary">
              Hotels
            </p>
            <p className="flex cursor-pointer items-center gap-2 font-google-sans text-17px font-medium text-navText hover:text-primary">
              Flights
            </p>
            <p className="flex cursor-pointer items-center gap-2 font-google-sans text-17px font-medium text-navText hover:text-primary">
              Bookings
            </p>
            <Link
              to="/auth/login"
              className="flex cursor-pointer items-center gap-2 font-google-sans text-17px font-medium text-navText hover:text-primary"
            >
              Login
            </Link>
            <MainButton
              text="Sign up"
              classes="text-black bg-transparent font-google-sans text-17px shadow-none rounded-normal border border-navText hover:border-none hover:text-white"
            />
            <div className="flex cursor-pointer items-center gap-2">
              <p className="font-google-sans text-17px font-medium">EN</p>
              <div>
                <img src="/images/chevron-down.png" alt="chevron down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div
        className={`animate-in fade-in zoom-in fixed top-0 z-[999] block w-full py-4 shadow-sm lg:hidden ${menu ? "bg-primary py-2" : "bg-white"}`}
      >
        <div className="mx-[10px] flex justify-between">
          <div className="flex select-none items-center gap-[50px] text-[16px]">
            <img src="/images/logo.png" alt="logo" className="w-[7rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="animate-in fade-in zoom-in cursor-pointer text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="menu"
                className="animate-in fade-in zoom-in cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu && (
          <div className="animate-in slide-in-from-right my-8 select-none">
            <div className="mx-4 mt-8 flex flex-col gap-8">
              <div className="flex select-none flex-col gap-[20px] text-[16px] xl:gap-[50px]">
                <p className="flex cursor-pointer items-center gap-2 font-[600] text-navText hover:text-white">
                  Destinations
                </p>

                <p className="flex cursor-pointer items-center gap-2 font-[600] text-navText hover:text-white">
                  Hotels
                </p>
                <p className="flex cursor-pointer items-center gap-2 font-[600] text-navText hover:text-white">
                  Flights
                </p>
                <p className="flex cursor-pointer items-center gap-2 font-[600] text-navText hover:text-white">
                  Bookings
                </p>
                <Link
                  to="/auth/login"
                  className="flex cursor-pointer items-center gap-2 font-[600] text-navText hover:text-white"
                >
                  Login
                </Link>
                <MainButton text="Sign up" />
                <div className="flex cursor-pointer items-center gap-2">
                  <p className="font-[700]">EN</p>
                  <div>
                    <img src="/images/chevron-down.png" alt="chevron down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
