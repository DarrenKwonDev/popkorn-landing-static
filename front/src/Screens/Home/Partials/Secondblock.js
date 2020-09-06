import React from "react";
import { SecondblockStyle } from "../Style";

function Secondblock() {
  return (
    <SecondblockStyle>
      <div className="ImageAndButtons">
        <img src={"phone.png"} className="mainImg" alt="phoneImage"></img>
      </div>

      <div className="descWrapper">
        <div className="desc1">
          Get into <strong>popkorn</strong> <br />
          and change your kpop stars into your personal teachers.
        </div>
        <div className="desc2">
          Know your favorite song or drama by heart.
          <br />
          Master your Korean.
        </div>

        <a href={"https://edupopkorn.com"}>
          <div className="discover">
            <span>Discover</span>
          </div>
        </a>
      </div>
    </SecondblockStyle>
  );
}

export default Secondblock;
