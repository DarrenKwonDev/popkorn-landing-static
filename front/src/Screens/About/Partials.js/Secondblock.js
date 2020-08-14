import React from "react";
import styled from "styled-components";
import { Title } from "../Style";

const Warapper = styled.div`
  background-color: #fffef9;
  width: 100%;
  padding: 2em 16em;
  display: flex;
  flex-direction: column;

  @media all and (max-width: 1023px) {
    padding: 2em 3em;
  }

  .desc {
    font-size: 1.3em;
    font-weight: 500;
    line-height: 2;
  }
`;

function Secondblock() {
  return (
    <Warapper>
      <Title>Designed for your success</Title>
      <div className="desc">
        <div style={{ marginBottom: "3em" }}>
          EduPopKorn is the world’s first Korean language learning platform that
          combines short clips and videos to education. Advocating and
          fascinated by the global K-pop enthusiasm, we were obliged to build
          the PopKorn platform that can help world wide fans to enjoy Korean
          video contents by heart. For serious Korean language learners, we
          provide myriads of Korean language excercises and quizzes, carefully
          crafted by our team of educational experts. Most importantly,
          PopKorn’s unique voice recognition AI will analyze and grade your
          speaking. Official TOPIK (Test of Proficiency in Korean) example tests
          are provided so you can always check how far you have come.
        </div>

        <div>
          EduPopKorn works along side with most prestigious instructors with
          plenty of experience teaching Korean. The lectures provided by the
          instructors will be the fastest way to improve your Korean language
          skill.
        </div>
      </div>
    </Warapper>
  );
}

export default Secondblock;
