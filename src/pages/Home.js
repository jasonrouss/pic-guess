import React from "react";
import Categories from "../components/Categories";
// Assets
import logo from "../assets/logo.png";
import stepOne from "../assets/step/stepOne.png";
import stepTwo from "../assets/step/stepTwo.png";
import stepThree from "../assets/step/stepThree.png";

const Home = ({ setCatNb, setCategory, setCatName }) => {
  const setSelectedCategory = (category, catNb, catName) => {
    setCategory(category);
    setCatNb(catNb);
    setCatName(catName);

    console.log("category: ", category, "catNb: ", catNb);
  };
  return (
    <>
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="mt-3" />
      </div>
      {/* Category */}

      <div className="flex justify-center">
        <Categories setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex m-16 justify-center text-3xl">
        Read all 3 steps to learn how to play.
      </div>
      {/* How to play */}
      <div className="mt-8 lg:flex  lg:justify-evenly ">
        <div div className="StepOne mx-8 flex  justify-center lg:w-1/2">
          Step 1: Select a category of images by clicking on one of the
          available category buttons. The six categories available for selection
          include Landmarks, Fiction, Planets, Paintings, Castles, and
          Mountains. Landmarks feature famous locations around the world such as
          the Eiffel Tower and the Great Wall of China. Fiction includes
          creatures and characters from popular myths and legends. Planets
          showcases images of our Solar System's planets and moons. Paintings
          features famous works of art from renowned artists. Castles offers a
          glimpse into the grand architecture of historical castles and
          fortresses. Finally, Mountains offers a chance to explore some of the
          world's most majestic peaks and mountain ranges.
        </div>
        <div className="my-8 flex justify-center">
          <img src={stepOne} alt="Step one" className="h-[430px] w-[330px] " />
        </div>
      </div>
      <div className="mx-8 mt-8 lg:flex lg:justify-evenly">
        <div className="StepTwo flex justify-center lg:w-1/2 ">
          Step 2: In this step, you will be presented with a photo and four
          options. Your task is to guess what the photo represents by selecting
          one of the options. Once you have made your selection, the result will
          be displayed, and your score will be updated accordingly. If you have
          guessed correctly, your score will be incremented by one. The index
          will also be incremented by one, regardless of the outcome of your
          guess. Keep selecting options until you reach the end of the game.
        </div>
        <div className="my-8 flex justify-center lg:order-first ">
          <img
            src={stepTwo}
            alt="Step Three "
            className="h-[430px] w-[430px]"
          />
        </div>
      </div>
      <div className="mx-8 mt-8 lg:flex lg:justify-evenly">
        <div className="StepThree my-8 flex justify-center lg:w-1/2">
          Step 3: At the conclusion of the game, players will be presented with
          the option to replay the current category or return to the home
          screen. The home screen allows players to select a different category
          of images by clicking on one of the available category buttons. The
          six categories available are landmarks, fiction, planets, paintings,
          castles, and mountains. Each category offers a unique and challenging
          set of images for players to test their knowledge and skills. The
          replay option allows players to test their skills again and strive for
          a higher score, while the home screen option gives players the
          opportunity to explore new and exciting categories. The choice is
          yours, whether you want to replay and improve your score or try a new
          category and test your knowledge.
        </div>
        <div className="my-8 flex justify-center">
          <img src={stepThree} alt="Step one" className="h-[430px] w-[330px]" />
        </div>
      </div>
    </>
  );
};

export default Home;
