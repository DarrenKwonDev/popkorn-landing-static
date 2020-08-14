import React from "react";
import { ThirdblockStyle } from "../Style";

function ThirdBlock() {
  return (
    <>
      <ThirdblockStyle className="left-pane">
        <div className="left-pane">
          <iframe
            src="https://player.vimeo.com/video/445441375"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div className="right-pane">
          <div className="title">
            Here's how PopKorn makes learning fast and interesting
          </div>
          <div>
            <div className="desc">
              Find opportunities and catch your dreams with PopKorrn
            </div>
          </div>
        </div>
      </ThirdblockStyle>
    </>
  );
}

export default ThirdBlock;
