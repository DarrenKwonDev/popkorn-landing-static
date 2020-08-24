import React, { useState, useEffect } from "react";
import { ThirdblockStyle } from "../Style";

function ThirdBlock() {
  const [isMobile, setisMobile] = useState(false);

  // 리사이즈 이벤트를 감지하여 가로 길이에 따라 모바일 여부 결정
  const resizingHandler = () => {
    if (window.innerWidth <= 1023) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  // 우선 맨 처음 1023이하면 모바일 처리
  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setisMobile(true);
    }

    window.addEventListener("resize", resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  return (
    <>
      <ThirdblockStyle>
        <div className="videoWrapper">
          {isMobile ? (
            <iframe
              src="https://player.vimeo.com/video/445441375"
              width="320"
              height="240"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="video"
            ></iframe>
          ) : (
            <iframe
              src="https://player.vimeo.com/video/445441375"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="video"
            ></iframe>
          )}
        </div>
        <div className="textWrapper">
          <div className="title">
            Here's how PopKorn makes <br /> learning fast and interesting
          </div>
          <div className="desc">lorem ipsum dolor sit amet</div>
        </div>
      </ThirdblockStyle>
    </>
  );
}

export default ThirdBlock;
