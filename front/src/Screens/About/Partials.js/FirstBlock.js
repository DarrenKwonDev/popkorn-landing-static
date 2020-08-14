import React from "react";
import { FirstBlockStyled } from "../Style";

function FirstBlock() {
  return (
    <FirstBlockStyled>
      <div className="imageWrapper">
        <img src={"about.png"} className="mainImg"></img>
      </div>
    </FirstBlockStyled>
  );
}

export default FirstBlock;
