import React from "react";
import { SecondblockStyle } from "../Style";

function Secondblock() {
  return (
    <SecondblockStyle className="second-block">
      <div className="left-pane">
        <img src={"phone.png"}></img>
      </div>
      <div className="right-pane">
        <div className="title">We want the world to enjoy learning. </div>
        <div>
          <div className="desc">
            At edupopkorn we belive that education is fun.
          </div>
          <div className="desc">
            As one of the leaders of online language learning platform, <br />
            we design education for entertainment.
          </div>
          <div className="desc">
            A team of edutainment maniacs have gathered to <br />
            revolutionalize language learning through mobile <br />
            application and AI technology.
          </div>
        </div>
      </div>
    </SecondblockStyle>
  );
}

export default Secondblock;
