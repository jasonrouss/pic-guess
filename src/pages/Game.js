import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Photo from "../components/Photo";
import Option from "../components/Option";
import Score from "../components/Score";
// Data
import { gameData } from "../data/dataNewNew";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import logo from "../assets/logo.png";

const Game = ({ catNb, category, catName }) => {
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
    // select the object at the current index from the gameData array

    const currentObject = gameData[catNb][category][currentIndex];
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
    setTotal(gameData[catNb][category].length);
  };

  const checkAnswer = (option) => {
    if (currentIndex === total) {
      if (option === correctOption) {
        alert("Correct!");
        setScore(score + 1);
        setCurrentIndex(50);
      } else {
        alert("Wrong!");
        setCurrentIndex(50);
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

  return (
    <>
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="mt-3" />
      </div>
      <div className="flex justify-center">
        <div className="mt-8 rounded-lg border-[3px] border-[#1e2124] bg-[#f7f7f7] shadow-lg">
          <div className="mt-10 flex items-center justify-evenly    ">
            <Link to={"/"}>
              <button>
                <div className=" mb-4 flex h-[38px]  w-[38px] justify-center overflow-hidden rounded-lg border-[3px]  border-[#1e2124] bg-[#6B778D] pt-1 text-2xl   font-semibold  leading-none text-[#222831]">
                  <AiOutlineHome />
                </div>
              </button>
            </Link>

            <div className="">
              <div className="mb-4   text-center text-lg font-semibold  leading-none">
                {catName}
              </div>
            </div>
            <div className="">
              <div className=" mb-4  text-center text-lg font-semibold  leading-none ">
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
            {/* Second column  */}
          </div>
          <div className=" flex items-center justify-center">
            {currentIndex === 50 ? (
              <Link
                to={"/"}
                className="text-overflow-ellipsis mt-4  h-[38px] w-[110px] overflow-hidden rounded-lg border-2 border-slate-800 bg-slate-300 pt-2 text-center text-lg font-semibold  leading-none text-slate-800"
              >
                New Game
              </Link>
            ) : null}
          </div>

          <div className=" my-8 flex items-center	 justify-center text-[17px] font-semibold">
            Index {counter} / {total}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;

// It looks like the problem is that you are using the allOptions state variable in the shuffleAnswers function without updating its value.
// In javascript, arrays and objects are passed by reference, when you mutate an array or an object, the original state will be also mutated.
// You can fix this by creating a copy of the allOptions state variable before mutating it in the shuffleAnswers function, you can use the spread operator to create a new array.
