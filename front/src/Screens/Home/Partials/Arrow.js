import React from "react";
import styled, { keyframes } from "styled-components";

const ArrowAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
    transform: translateY(5px) ;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledArrorw = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100%;

  bottom: 20px;

  animation: ${ArrowAnimation} 1.5s ease-in-out infinite;

  img {
    cursor: pointer;
    width: 48px;
  }
`;

const onClick = () => {
  console.log("click");
  let pageHeight = window.innerHeight;

  window.scrollTo({ top: pageHeight, behavior: "smooth" });
};

function Arrow() {
  return (
    <StyledArrorw>
      <img src={"down-arrow.png"} alt="downArrow" onClick={onClick} />
    </StyledArrorw>
  );
}

export default Arrow;
