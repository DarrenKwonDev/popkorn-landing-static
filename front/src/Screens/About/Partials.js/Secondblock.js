import React from "react";
import styled from "styled-components";
import { Title } from "../Style";
import { FormattedMessage } from "react-intl";

const Warapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 10em 4em;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 1023px) {
    padding: 10em 2em;
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
          <FormattedMessage
            id="EduPopKorn is the world’s first Korean language learning platform that
          combines short clips and videos to education."
          />
          <br />
          <br />
          <FormattedMessage
            id="As one of the leaders of online language learning platform, we design
          education for entertainment."
          />
          <br />
          <br />
          <FormattedMessage
            id="A team of edutainment maniacs have gathered to revolutionalize
          language learning through mobile application and AI technology."
          />
          <br />
          <br />
          <FormattedMessage id="Advocated and fascinated by the global K-pop enthusiasm," />

          <br />
          <FormattedMessage
            id="we were obliged to build the PopKorn platform that can help
          world wide fans to enjoy Korean video contents by heart."
          />
        </div>
      </div>
    </Warapper>
  );
}

export default Secondblock;
