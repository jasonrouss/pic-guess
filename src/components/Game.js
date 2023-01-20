import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import Option from "./Option";
import Score from "./Score";
import Category from "./Category";

import { picData } from "../data/data";
const Game = () => {
  const [selectedPicture, setSelectedPicture] = useState(0);
  const [total, setTotal] = useState(0);
  const [allOptions, setAllOptions] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [score, setScore] = useState(0);

  const [correctOption, setCorrectOption] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    shuffleAnswers();
  }, []);

  const shuffleAnswers = () => {
    // select the object at the current index from the picData array
    if (counter === picData.length) {
      return;
    } else {
      const currentObject = picData[currentIndex];
      setSelectedPicture(currentObject);
      setCorrectOption(currentObject.correctOption);
      // concatenate the correct option and wrong options
      const options = [
        currentObject.correctOption,
        ...currentObject.wrongOptions,
      ];
      // shuffle the options
      for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setAllOptions(options);
      setCurrentOptions(options);
      // increment current index
      setCurrentIndex(currentIndex + 1);
      setTotal(picData.length);
    }
  };

  const checkAnswer = (option) => {
    if (currentIndex === total) {
      if (option === correctOption) {
        alert("Correct!");
        setScore(score + 1);
        setCurrentIndex(50);
      } else {
        alert("Wrong!");
      }
    } else if (currentIndex === 50) {
      return false;
    } else {
      setCurrentIndex(currentIndex + 1);

      shuffleAnswers();
      if (option === correctOption) {
        alert("Correct!");
        setScore(score + 1);
      } else {
        alert("Wrong!");
      }
    }

    console.log(currentIndex, total, score);
  };

  const handleOptionClick = () => {
    if (currentIndex === 0) {
      setCounter(1);
    } else if (counter === total) {
      return;
    } else {
      setCounter(counter + 1);
    }
  };

  const resetGame = () => {
    window.location.reload();

    console.log(counter, currentIndex + 1);
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="grid grid-rows-1">
          <div className="mb-4 ml-12 text-overflow-ellipsis h-12 w-24 overflow-hidden  rounded-lg border-2 border-amber-600 bg-amber-100 pt-3 text-center text-lg font-semibold  leading-none text-amber-700">
            <Category />
          </div>
        </div>
        <div className="grid grid-rows-1">
          <div className="ml-48 mb-4 h-12 w-48 overflow-hidden rounded-lg pt-3  text-center text-lg font-semibold  leading-none ">
            <Score score={score} total={total} />
          </div>
        </div>
      </div>

      <div className="flex  items-center justify-center ">
        <Photo selectedPicture={selectedPicture} />
      </div>

      <Option
        options={currentOptions}
        handleOptionClick={handleOptionClick}
        checkAnswer={checkAnswer}
      />

      <div className="flex items-center justify-center">
        {/* First Column */}
        <div className="grid grid-rows-1">
          <div
            id="option-a"
            className="  m-4 h-12 w-48 overflow-hidden rounded-lg  text-center text-lg font-semibold  leading-none "
          >
            {/* Pass the failedGuesses state as a prop */}
          </div>
        </div>

        {/* Second column  */}
      </div>
      <div className=" flex items-center justify-center">
        {currentIndex === 50 ? (
          <button
            className="text-overflow-ellipsis m-4 h-12 w-48 overflow-hidden rounded-lg border-2 border-slate-800 bg-slate-300 text-center text-lg font-semibold  leading-none text-slate-800"
            onClick={() => {
              resetGame();
            }}
          >
            New Game
          </button>
        ) : null}
      </div>

      <div className=" flex items-center justify-center">
        Index {counter} / {total}
      </div>
    </div>
  );
};

export default Game;

// It looks like the problem is that you are using the allOptions state variable in the shuffleAnswers function without updating its value.
// In javascript, arrays and objects are passed by reference, when you mutate an array or an object, the original state will be also mutated.
// You can fix this by creating a copy of the allOptions state variable before mutating it in the shuffleAnswers function, you can use the spread operator to create a new array.
