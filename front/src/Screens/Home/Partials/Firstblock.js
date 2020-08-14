import React from "react";
import android from "../../../assets/android.svg";
import apple from "../../../assets/apple.svg";
import startButton from "../../../assets/startButton.svg";

import { FirstBlockStyled } from "../Style";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <img src={"man.png"} className="mainImg"></img>
      <div className="Desc">
        <div className="titleHead">
          <div>PopKorn makes Korean Language</div>
          <div>Fun and Addictive</div>
        </div>
        <div className="titlebelow">
          <div>At PopKorn, we make language fun and addictive. </div>
          <div>
            Download PopKorn and change your K-Pop stars into
            <br /> your personal teachers on your screen.
          </div>
          <div>Know your favorite song or drama by heart. </div>
          <div>Master Your Korean.</div>
        </div>
        <img src={startButton} className="startButton"></img>
        <div className="playButton">
          <img src={android} className="button-item"></img>
          <img src={apple} className="button-item"></img>
        </div>
      </div>
    </FirstBlockStyled>
  );
}

export default Firstblock;
