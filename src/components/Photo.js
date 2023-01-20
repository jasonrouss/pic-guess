//This component would handle displaying the photo in the middle of the game
import React from "react";

const Photo = (props) => {
  return <img className=" photo-container h-[190px] w-[215px] m-4 rounded-lg border-2 border-slate-800 " src={props.selectedPicture.url} alt="current" />
}
  

export default Photo;
