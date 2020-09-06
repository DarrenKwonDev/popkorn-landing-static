import React from "react";
import { SecondblockStyle } from "../Style";

function Secondblock() {
  return (
    <SecondblockStyle>
      <div className="ImageAndButtons">
        <img src={"phone.png"} className="mainImg" alt="phoneImage"></img>

        <div>
          <a href={"https://edupopkorn.com"}>
            <i className="fas fa-play-circle"></i>
          </a>
        </div>
      </div>

      <div className="descWrapper">
        <div className="desc1">
          Get into{" "}
          <mark style={{ backgroundColor: "rgb(231,40,106)" }}>popkorn</mark>{" "}
          <br />
          and change your kpop stars into your personal teachers.
        </div>
        <div className="desc2">
          Know your favorite song or drama by heart.
          <br />
          Master your Korean.
        </div>
      </div>
    </SecondblockStyle>
  );
}

export default Secondblock;
