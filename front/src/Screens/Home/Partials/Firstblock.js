import React from "react";
import android from "../../../assets/android.svg";
import apple from "../../../assets/apple.svg";
import startButton from "../../../assets/startButton.svg";

import { FirstBlockStyled } from "../Style";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <img src={"man.png"} className="mainImg"></img>
    </FirstBlockStyled>
  );
}

export default Firstblock;

{
  /* <div className="Desc">
<img src={startButton} className="startButton"></img>
<div className="playButton">
  <img src={android} className="button-item"></img>
  <img src={apple} className="button-item"></img>
</div>
</div> */
}
