//This component would handle displaying each of the 4 options (a, b, c, d)

import React from "react";

const Option = (props) => {
  return (
    <>
      <div className="flex items-center justify-center">
        {/* First Column */}
        <div className="grid grid-rows-2">
          <button
            onClick={() => {
              props.checkAnswer(props.options[0]);
              props.handleOptionClick();
            }}
            id="option-a"
            className=" text-overflow-ellipsis m-4 h-12 w-48 overflow-hidden rounded-lg border-2 border-blue-800 bg-blue-200 text-center text-lg font-semibold  leading-none text-blue-900"
          >
            A {props.options[0]}
          </button>
          <button
           onClick={() => {
            props.checkAnswer(props.options[1]);
            props.handleOptionClick();
          }}
            id="option-b"
            className="text-overflow-ellipsis m-4 h-12  w-48 overflow-hidden rounded-lg border-2 border-red-800 bg-red-200 text-center text-lg font-semibold  leading-none text-red-900"
          >
            B {props.options[1]}
          </button>
        </div>

        {/* Second column  */}
        <div className="grid grid-rows-2">
          <button
           onClick={() => {
            props.checkAnswer(props.options[2]);
            props.handleOptionClick();
          }}
            id="option-c"
            className="text-overflow-ellipsis m-4 h-12 w-48 overflow-hidden rounded-lg border-2 border-emerald-800 bg-emerald-200 text-center text-lg font-semibold  leading-none text-emerald-900"
          >
            C {props.options[2]}
          </button>
          <button
          onClick={() => {
            props.checkAnswer(props.options[3]);
            props.handleOptionClick();
          }}
            id="option-d"
            className="text-overflow-ellipsis m-4 h-12 w-48 overflow-hidden rounded-lg border-2 border-amber-600 bg-amber-100 text-center text-lg font-semibold  leading-none text-amber-700"
          >
            D {props.options[3]}
          </button>
        </div>
      </div>
    </>
  );
};

export default Option;
