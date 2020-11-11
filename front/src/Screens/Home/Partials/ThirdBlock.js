import React from "react";
import { ThirdblockStyle } from "../Style";
import { FormattedMessage } from "react-intl";

function ThirdBlock() {
  return (
    <>
      <ThirdblockStyle>
        {/* 텍스트 */}
        <div>
          <div className="textWrapper">
            <div className="title">
              <FormattedMessage id="Here's how PopKorn makes" />
              <br />
              <FormattedMessage id="learning interesting" />
            </div>
          </div>
        </div>
        {/* 비디오 */}
        <div className="embed-container">
          <div>Video 준비중</div>
          {/* <iframe
            src="https://player.vimeo.com/video/445441375"
            frameBorder="0"
            width="640"
            height="360"
            allow="autoplay; fullscreen"
            allowFullScreen
            // webkitallowfullscreen
            // mozallowfullscreen
            className="video"
            title="vidoe-browser"
          ></iframe> */}
        </div>
      </ThirdblockStyle>
    </>
  );
}

export default ThirdBlock;
