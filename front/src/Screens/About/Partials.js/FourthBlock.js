import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Title } from "../Style";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  @media all and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function FourthBlock() {
  return (
    <>
      <div>
        <Title>Special Mentors</Title>
        <Wrapper>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar size={156} icon={<UserOutlined />} src={"yale.png"} />
              <div
                style={{
                  margin: "1em 0",
                  fontSize: "1.2em",
                  fontWeight: "600",
                }}
              >
                Clint Minseung Yoo
              </div>
            </div>
            <div style={{ textAlign: "start" }}>
              <ul style={{ listStyle: "disc", lineHeight: "150%" }}>
                <li>Yale University</li>
                <li>Greenberg Traurig LLP</li>
                <li>Korea Men's National Lacrosse Team</li>
              </ul>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar size={156} icon={<UserOutlined />} src={"yale.png"} />
              <div
                style={{
                  margin: "1em 0",
                  fontSize: "1.2em",
                  fontWeight: "600",
                }}
              >
                Clint Minseung Yoo
              </div>
            </div>
            <div style={{ textAlign: "start" }}>
              <ul style={{ listStyle: "disc", lineHeight: "150%" }}>
                <li>Yale University</li>
                <li>Greenberg Traurig LLP</li>
                <li>Korea Men's National Lacrosse Team</li>
              </ul>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar size={156} icon={<UserOutlined />} src={"yale.png"} />
              <div
                style={{
                  margin: "1em 0",
                  fontSize: "1.2em",
                  fontWeight: "600",
                }}
              >
                Clint Minseung Yoo
              </div>
            </div>
            <div style={{ textAlign: "start" }}>
              <ul style={{ listStyle: "disc", lineHeight: "150%" }}>
                <li>Yale University</li>
                <li>Greenberg Traurig LLP</li>
                <li>Korea Men's National Lacrosse Team</li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default FourthBlock;
