import React from "react";

import { FirstBlockStyled } from "../Style";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <div className="imageAndTitle">
        <img src={"man.png"} alt="man" className="manImage" />
        <div className="headTitleWrapper">
          <div className="title">
            <mark
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                lineHeight: "1.5",
              }}
            >
              PopKorn makes Korean language <br /> Fun and Addictive.
            </mark>
          </div>
          <div className="desc">
            <mark
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                lineHeight: "1.5",
              }}
            >
              Download PopKorn and change your K-Pop stars <br />
              into your personal teachers on your screen.
            </mark>
          </div>
        </div>
      </div>
    </FirstBlockStyled>
  );
}

export default Firstblock;
