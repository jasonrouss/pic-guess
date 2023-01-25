//This component would handle displaying the photo in the middle of the game
import React from "react";

const Photo = (props) => {
  return (
    <img
      className="shadow-lg photo-container m-4 h-[190px] w-[215px] rounded-lg border-2 border-slate-800 "
      src={props.selectedPicture.url}
      alt="current"
    />
  );
};

export default Photo;
