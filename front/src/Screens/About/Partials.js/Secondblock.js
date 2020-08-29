import React from "react";
import styled from "styled-components";
import { Title } from "../Style";

const Warapper = styled.div`
  background-color: #fffef9;
  width: 100%;
  padding: 10em 4em;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 1023px) {
    padding: 2em 2em;
  }

  .desc {
    font-size: 24px;
    font-weight: 500;
    line-height: 2;
    text-align: center;

    @media all and (max-width: 1023px) {
      font-weight: 500;
      line-height: 1.5;
    }
  }
`;

function Secondblock() {
  return (
    <Warapper>
      <Title>Designed for your success</Title>
      <div className="desc">
        <div style={{ marginBottom: "3em" }}>
          EduPopKorn is the world’s first Korean language learning platform that
          combines short clips and videos to education.
          <br />
          <br />
          Advocating and fascinated by the global K-pop enthusiasm, <br /> we
          were obliged to build the PopKorn platform that can help world wide
          fans to enjoy Korean video contents by heart.
        </div>
      </div>
    </Warapper>
  );
}

export default Secondblock;
