import React from "react";
import { ThirdblockStyle } from "../Style";

function ThirdBlock() {
  return (
    <>
      <ThirdblockStyle>
        {/* 텍스트 */}
        <div>
          <div className="textWrapper">
            <div className="title">
              Here's how PopKorn makes <br /> learning interesting
            </div>
          </div>
        </div>
        {/* 비디오 */}
        <div class="embed-container">
          <iframe
            src="https://player.vimeo.com/video/445441375"
            frameBorder="0"
            width="640"
            height="360"
            allow="autoplay; fullscreen"
            allowFullScreen
            webkitAllowFullScreen
            mozallowfullscreen
            className="video"
            title="vidoe-browser"
          ></iframe>
        </div>
      </ThirdblockStyle>
    </>
  );
}

export default ThirdBlock;
