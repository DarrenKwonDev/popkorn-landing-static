import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const WholeWrapper = styled.div`
  margin-top: 64px;
  position: relative;

  .BoxWrapper {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  .pinkBox {
    width: 80vw;
    height: 400px;
    position: relative;

    border-radius: 24px;
    background-color: #ffb9c3;
    z-index: -1;

    @media all and (max-width: 1023px) {
      height: 250px;
    }
  }
`;

function FifthBlock({ isMobile }) {
  return (
    <WholeWrapper id={"testimonials"}>
      <div className="BoxWrapper">
        <div className="pinkBox"></div>
      </div>
      <Slider isMobile={isMobile} />
    </WholeWrapper>
  );
}

export default FifthBlock;
