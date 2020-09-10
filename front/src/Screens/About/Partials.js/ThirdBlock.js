import React from "react";
import styled from "styled-components";
import Others from "./Others";

import { Title } from "../Style";

const Warapper = styled.div`
  background-color: #f6f9fc;
  width: 100%;
  padding: 10em 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1023px) {
    padding: 2em 2em;
  }

  .gridWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 64px;

    width: 750px;

    @media all and (max-width: 1023px) {
      grid-template-columns: 1fr;
      width: 300px;
      gap: 16px;
      /* grid-template-rows: repeat(4, 1fr); */
    }
  }

  .customCard:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const CustomCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center center;

    @media all and (max-width: 1023px) {
      height: 300px;
      width: 300px;
    }
  }

  .hoverContents {
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 12px;

    position: absolute;
    z-index: 5;
    color: white;
    font-size: 1.25rem;
    bottom: 0;
    left: 0;

    .text {
      display: flex;
      flex-direction: column;
      margin-left: 24px;

      .name {
        font-size: 24px;
        margin-bottom: 4px;
        color: white;
      }

      ul {
        list-style-type: circle;
        line-height: 1.5;
        color: #ffffff8c;
      }
    }

    @media all and (max-width: 1023px) {
      font-size: 1rem;
    }
  }
`;

function ThirdBlock() {
  return (
    <>
      <Warapper>
        <Title style={{ marginTop: 155 }}>Meet The Team</Title>
        <div className="gridWrapper">
          <CustomCard className="customCard">
            <div>
              <img alt="example" src={"jb.jpg"} />
              <div className="hoverContents">
                <div className="text">
                  <div className="name">JB</div>
                  <ul>
                    <li>
                      Carnegie Mellon University, <br /> College of Engineering
                    </li>
                    <li>
                      Sinchang Industrial Co., <br /> Ltd. advisory committee
                    </li>
                    <li>Pittsburgh Korean Language and culture operator</li>
                  </ul>
                </div>
              </div>
            </div>
          </CustomCard>
          <CustomCard className="customCard">
            <img alt="example" src={"sh.jpg"} />
            <div className="hoverContents">
              <div className="text">
                <div className="name">Suhun Kwon</div>
                <ul>
                  <li>
                    Seoul National University, <br /> Korean language and
                    literature
                  </li>
                </ul>
              </div>
            </div>
          </CustomCard>
        </div>

        {/* 다른 사람들 */}
        <Others />
      </Warapper>
    </>
  );
}

export default ThirdBlock;

// <div className="introducing">
//           <div
//             style={{
//               fontWeight: "bold",
//               fontSize: "1.3em",
//               marginBottom: "3em",
//             }}
//           >
//             "Thanks you for your service"
//           </div>
//           <ul style={{ listStyle: "disc", lineHeight: "150%" }}>
//             <li>Carnegie Mellon University, College of Engineering</li>
//             <li>Sinchang Industrial Co., Ltd. advisory committee</li>
//             <li>Pittsburgh Korean Language and culture operator</li>
//           </ul>
//         </div>
