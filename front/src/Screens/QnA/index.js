import React from "react";
import styled from "styled-components";
import { Collapse, Divider } from "antd";

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 3em 3em 1em 3em;
`;

function QnA() {
  return (
    <div>
      <Wrapper>
        <Divider orientation="left">FAQ</Divider>
        <Collapse accordion>
          <Collapse.Panel header="What is PopKorn" key="1">
            <p>What is PopKorn</p>
          </Collapse.Panel>
          <Collapse.Panel header="I can't login in application" key="2">
            <p>I can't login in application</p>
          </Collapse.Panel>
          <Collapse.Panel header="Error on my android phone" key="3">
            <p>Error on my android phone</p>
          </Collapse.Panel>
        </Collapse>
      </Wrapper>
    </div>
  );
}

export default QnA;
