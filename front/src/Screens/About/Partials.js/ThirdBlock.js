import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { Steps } from "antd";
import { Title } from "../Style";
const { Step } = Steps;
const { Meta } = Card;

const Warapper = styled.div`
  background-color: #f9fcff;
  width: 100%;
  padding: 2em 16em;
  display: flex;
  flex-direction: column;

  /* 블럭 간의 간격 */
  margin: 3em 0;

  @media all and (max-width: 1023px) {
    padding: 2em 5em;
  }

  .desc {
    font-size: 1.3em;
    font-weight: 500;
    line-height: 2;
  }

  .gridWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;

    @media all and (max-width: 1023px) {
      grid-template-columns: 1fr;
    }

    .introducing {
      justify-self: start;
    }
  }
`;

function ThirdBlock() {
  return (
    <Warapper>
      <Title>Meet The Team</Title>
      <div className="gridWrapper">
        <Card
          hoverable
          style={{ width: 270 }}
          cover={<img alt="example" src={"jb.png"} />}
        >
          <Meta title="Joonbeom Cho" description="Co-Founder" />
        </Card>
        <div className="introducing">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.3em",
              marginBottom: "3em",
            }}
          >
            "Thanks you for your service"
          </div>
          <ul style={{ listStyle: "disc", lineHeight: "150%" }}>
            <li>Carnegie Mellon University, College of Engineering</li>
            <li>Sinchang Industrial Co., Ltd. advisory committee</li>
            <li>Pittsburgh Korean Language and culture operator</li>
          </ul>
        </div>
        <Card
          hoverable
          style={{ width: 270 }}
          cover={<img alt="example" src={"sh.png"} />}
        >
          <Meta title="Suhun Kwon" description="Co-Founder" />
        </Card>
        <div className="introducing">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.3em",
              marginBottom: "3em",
            }}
          >
            “Jumping and Jumping!”
          </div>
          <ul style={{ listStyle: "disc", lineHeight: "150%" }}>
            <li>Seoul National University, Korean language and literature</li>
            <li>SUPPPPPPERV</li>
            <li>IT PROGRAM SOMETING</li>
          </ul>
        </div>
      </div>
    </Warapper>
  );
}

export default ThirdBlock;
