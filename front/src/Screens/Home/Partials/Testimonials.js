import React from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import Slider from "./Slider";

const WholeWrapper = styled.div`
  /* 위 feature를 감싼 div 보다 아래로 더 튀어나왔기 때문에 margin을 줘야 한다. */
  /* 이 높이 때문에 정중앙을 flex로 정렬하지 않는다. 그냥 margin-top해서 나온 높이가 중앙 비슷하게 만들어야 한다 */
  margin-top: 400px;

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

  /* 없어진 속성 */
  .cardWrapper {
    /* touch-action: none; */
    /* -ms-overflow-style: none; */
    /* width: 100%; */
    /* height: 100%; */
  }

  .cardWrapper::-webkit-scrollbar {
    /* display: none; */
  }
`;

function Testimonials() {
  return (
    <WholeWrapper>
      <div className="title">Testimonials</div>
      <Slider />
    </WholeWrapper>
  );
}

export default Testimonials;
