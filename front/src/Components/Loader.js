import React from "react";
import styled from "styled-components";

const LoaderContents = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);

  font-size: 40px;
`;

function Loader() {
  return <LoaderContents>Loading...</LoaderContents>;
}

export default Loader;
