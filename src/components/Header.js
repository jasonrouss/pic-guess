import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center">
      <div className=" m-8 flex  justify-between w-full gap-24 border-b-2 border-slate-800 p-2">
        <img src={logo} alt="logo" className=" h-[120px] w-[200px] " />{" "}
        <div className="titleName mt-12 text-3xl text-blue-800">icons</div>
      </div>
    </div>
  );
};

export default Header;
