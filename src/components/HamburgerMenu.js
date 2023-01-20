import React, { useState } from "react";
import "../index.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
 "
    >
      <button
        className={`hamburger rounded-md bg-white p-2 ${
          isOpen ? "hamburger-open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      {isOpen ? (
        <div className="menu-container">
          <div className=" mb-2 h-12  w-48 overflow-hidden rounded-lg border-2 border-red-800 bg-red-300 flex justify-center items-center  text-lg font-semibold  leading-none text-red-800">
            Shoes
          </div>
          <div className="mb-2  h-12  w-48 overflow-hidden rounded-lg border-2 border-red-800 bg-red-300 flex justify-center items-center  text-lg font-semibold  leading-none text-red-800">
            Cars
          </div>
          <div className=" h-12  w-48 overflow-hidden rounded-lg border-2 border-red-800 bg-red-300 flex justify-center items-center  text-lg font-semibold  leading-none text-red-800">
            Trees
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;
