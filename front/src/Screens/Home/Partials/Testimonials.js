import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import { FormattedMessage } from "react-intl";

const WholeWrapper = styled.div`
  /* 위 feature를 감싼 div 보다 아래로 더 튀어나왔기 때문에 margin을 줘야 한다. */
  /* 이 높이 때문에 정중앙을 flex로 정렬하지 않는다. 그냥 margin-top해서 나온 높이가 중앙 비슷하게 만들어야 한다 */
  margin-top: 200px;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    /*768px 이상, 1023px 이하일 때 적용되는 스타일입력*/
    /*테블릿 스타일입력*/
    margin-top: 400px;
  }

  @media all and (max-width: 767px) {
    /*767px 이하일 때 적용되는 스타일입력*/
    margin-top: 600px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  width: 100%;

  overflow: hidden;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 36px;
    @media all and (max-width: 1023px) {
      font-size: 30px;
    }
  }
`;

function Testimonials() {
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
    <WholeWrapper id="testimonials">
      <div className="title">
        <FormattedMessage id="Testimonials" />
      </div>
      <Slider isMobile={isMobile} />
    </WholeWrapper>
  );
}

export default Testimonials;
