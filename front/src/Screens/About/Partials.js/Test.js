import React from "react";
import styled from "styled-components";
import { Divider, Popover } from "antd";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media all and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  .advisorCard {
    width: 150px;
    height: 150px;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;

      border-radius: 12px;
    }
  }
`;

const clint = (
  <div>
    <p>Yale University</p>
    <p>Greenberg Traurig LLP</p>
    <p>Korea Men's National Lacrosse Team</p>
  </div>
);

const kang = (
  <div>
    <p>George Washington University</p>
    <p>Korea Innovation Center (Operator) </p>
    <p>Born.D Enter (planner at Club Octagon)</p>
  </div>
);

function Others() {
  return (
    <>
      <div style={{ width: "50vw", margin: "24px" }}>
        <Divider>
          <strong>Special Advisor</strong>
        </Divider>
      </div>
      <Wrapper>
        <Popover content={clint} placement="bottom" arrowPointAtCenter>
          <div className="advisorCard">
            <img src={"clint.png"} alt="clint" />
          </div>
        </Popover>
        <Popover content={kang} placement="bottom" arrowPointAtCenter>
          <div className="advisorCard">
            <img src={"kang.jpg"} alt="kang" />
          </div>
        </Popover>
        <div className="advisorCard"></div>
      </Wrapper>
    </>
  );
}

export default Others;
