import React from "react";
import { FirstBlockStyled } from "../Style";

function FirstBlock() {
  return (
    <FirstBlockStyled>
      <div className="imageWrapper">
        <img src={"about.png"} className="mainImg"></img>
      </div>
      <div className="catchphrase ">
        <mark
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            lineHeight: "1.5",
          }}
        >
          EduPopKorn is on a mission <br /> to make Korean language fun and
          exciting.
        </mark>
      </div>
    </FirstBlockStyled>
  );
}

export default FirstBlock;
