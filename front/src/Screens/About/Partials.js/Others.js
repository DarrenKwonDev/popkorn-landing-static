import React from "react";
import styled from "styled-components";
import { Divider, Popover } from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media all and (max-width: 1023px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }

  .advisorCard {
    width: 200px;
    height: 200px;
    color: gray;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;

      border-radius: 12px;
      margin-bottom: 12px;
    }

    ul {
      list-style-type: square;
      list-style-position: outside;
    }
  }

  .secondOne {
    @media all and (max-width: 1023px) {
      margin-top: 100px;
    }
  }
`;

function Others() {
  return (
    <>
      <div style={{ width: "50vw", margin: "24px" }}>
        <Divider>
          <strong>Special Advisor</strong>
        </Divider>
      </div>
      <Wrapper>
        <div className="advisorCard">
          <img src={"clint.png"} alt="clint" />
          <ul>
            <li>Yale University</li>
            <li>Greenberg Traurig LLP</li>
            <li>Korea Men's National Lacrosse Team</li>
          </ul>
        </div>

        <div className="advisorCard secondOne">
          <img src={"kang.jpg"} alt="kang" />
          <ul>
            <li>George Washington University</li>
            <li>Korea Innovation Center (Operator) </li>
            <li>Born.D Enter (planner at Club Octagon)</li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
}

export default Others;
