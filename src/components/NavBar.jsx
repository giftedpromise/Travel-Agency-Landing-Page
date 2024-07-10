import React, { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="z-20 md:top-0 md:shadow-none">
      {/* DESKTOP VIEW */}
      <div className="hidden p-4 lg:block">
        <div className="flex items-center justify-between">
          <div>
            <img src="/images/logo.png" alt="logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-6 text-lg">
            <p className="cursor-pointer text-navText hover:text-primary">
              Destinations
            </p>
            <p className="cursor-pointer text-navText hover:text-primary">
              Hotels
            </p>
            <p className="cursor-pointer text-navText hover:text-primary">
              Flights
            </p>
            <p className="cursor-pointer text-navText hover:text-primary">
              Bookings
            </p>
            <Link
              to="/auth/login"
              className="cursor-pointer text-navText hover:text-primary"
            >
              Login
            </Link>
            <MainButton
              text="Sign up"
              classes="text-black bg-transparent shadow-none border border-navText hover:border-none hover:text-white"
            />
            <div className="flex cursor-pointer items-center">
              <p className="text-navText">EN</p>
              <img
                src="/images/chevron-down.png"
                alt="chevron down"
                className="ml-2 h-4 w-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE AND TABLET VIEW */}
      <div
        className={`fixed top-0 z-50 w-full py-4 shadow-sm lg:hidden ${menu ? "bg-primary py-2" : "bg-white"}`}
      >
        <div className="mx-4 flex justify-between">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="w-28" />
          </div>
          <div className="flex items-center">
            {menu ? (
              <X className="cursor-pointer text-black" onClick={toggleMenu} />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="menu"
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu && (
          <div className="mt-8 flex flex-col gap-8">
            <div className="mx-4 flex flex-col gap-6 text-lg">
              <p className="cursor-pointer text-navText hover:text-white">
                Destinations
              </p>
              <p className="cursor-pointer text-navText hover:text-white">
                Hotels
              </p>
              <p className="cursor-pointer text-navText hover:text-white">
                Flights
              </p>
              <p className="cursor-pointer text-navText hover:text-white">
                Bookings
              </p>
              <Link
                to="/auth/login"
                className="cursor-pointer text-navText hover:text-white"
              >
                Login
              </Link>
              <MainButton text="Sign up" />
              <div className="flex cursor-pointer items-center">
                <p className="font-bold text-navText">EN</p>
                <img
                  src="/images/chevron-down.png"
                  alt="chevron down"
                  className="ml-2 h-4 w-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
