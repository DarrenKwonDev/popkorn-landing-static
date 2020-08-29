import React from "react";
import { FirstBlockStyled } from "../Style";

function FirstBlock() {
  return (
    <FirstBlockStyled>
      <div className="imageWrapper">
        <img src={"about.png"} className="mainImg" alt="about"></img>
        <div className="catchphrase">
          EduPopKorn is on a mission <br /> to make Korean language fun and
          exciting.
        </div>
      </div>
    </FirstBlockStyled>
  );
}

export default FirstBlock;
