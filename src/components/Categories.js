import React from "react";
import { Link } from "react-router-dom";
import { FaLandmark, FaDragon, FaMountain } from "react-icons/fa";
import { BiPlanet } from "react-icons/bi";
import { GiMonaLisa, GiCastle } from "react-icons/gi";
const Categories = (props) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {/* 1-3 */}
      <Link to={"/game"}>
        <div className="m-4 flex h-[43px] w-[175px] justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-200 pb-0.5 text-center text-lg font-semibold leading-none  text-blue-900 lg:w-[160px]">
          <FaLandmark className="text-md my-2.5 mx-1  h-4" />

          <button
            onClick={() =>
              props.setSelectedCategory("landmark", 0, "Landmarks")
            }
          >
            Landmarks
          </button>
        </div>
      </Link>
      <Link to={"/game"}>
        <div className="m-4 flex h-[43px] w-[175px] justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-200 pb-0.5 text-center text-lg font-semibold leading-none  text-blue-900 lg:w-[160px]">
          <FaDragon className="text-md my-2.5 mx-1  h-4" />

          <button
            onClick={() => props.setSelectedCategory("creature", 1, " Fiction")}
          >
            Fiction
          </button>
        </div>
      </Link>

      <Link to={"/game"}>
        <div className="m-4 flex h-[43px] w-[175px] justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-200 pb-0.5 text-center text-lg font-semibold leading-none  text-blue-900 lg:w-[160px]">
          <BiPlanet className="text-md my-2.5 mx-1  h-4" />

          <button
            onClick={() => props.setSelectedCategory("planet", 2, "Planets")}
          >
            Planets
          </button>
        </div>
      </Link>

      <Link to={"/game"}>
        <div className="m-4 flex h-[43px] w-[175px] justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-200 pb-0.5 text-center text-lg font-semibold leading-none  text-blue-900 lg:w-[160px]">
          <GiMonaLisa className=" my-2 mx-1 h-[24px] " />

          <button
            onClick={() =>
              props.setSelectedCategory("painting", 3, "Paintings")
            }
          >
            Paintings
          </button>
        </div>
      </Link>
      <Link to={"/game"}>
        <div className="m-4 flex h-[43px] w-[175px] justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-200 pb-0.5 text-center text-lg font-semibold leading-none  text-blue-900 lg:w-[160px]">
          <GiCastle className=" my-2 mx-1    " />

          <button
            onClick={() => props.setSelectedCategory("castle", 4, "Castles")}
          >
            Castles
          </button>
        </div>
      </Link>
      {/* 4-6 */}

      <Link to={"/game"}>
        <div className="m-4 flex h-[43px] w-[175px] justify-center overflow-hidden rounded-full border-2 border-blue-800 bg-blue-200 pb-0.5 text-center text-lg font-semibold leading-none  text-blue-900 lg:w-[160px]">
          <FaMountain className=" my-2 mx-1    " />

          <button
            onClick={() =>
              props.setSelectedCategory("mountain", 5, "Mountains")
            }
          >
            Mountains
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
