import React, { useState, useEffect } from "react";
import { HomeWrapper } from "./Style";
import Firstblock from "./Partials/Firstblock";
import Secondblock from "./Partials/Secondblock";
import ThirdBlock from "./Partials/ThirdBlock";
import FourthBlock from "./Partials/FourthBlock";
import Testimonials from "./Partials/Testimonials";

function Home() {
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
    <HomeWrapper>
      <Firstblock />
      {/* 3번째 블록이 먼저 나오는 이유는 비디오를 먼저 올려달라고 해서... */}
      <ThirdBlock />
      <Secondblock />
      <FourthBlock />
      <Testimonials isMobile={isMobile} />
    </HomeWrapper>
  );
}

export default Home;
