import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";

const ReviewCardWrapper = styled.div`
  width: calc(100vw / 3.5);
  height: 225px;
  border-radius: 12px;

  padding: 1em;
  margin-left: 100px;
  background-color: white;
  box-shadow: 0px 6px 0px 0px rgba(217, 46, 217, 0.71);

  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */

  @media all and (max-width: 1023px) {
    margin-left: calc(100vw / 6);

    width: calc(100vw / 2);
    height: 170px;
  }

  .upper {
    display: flex;
    flex-direction: row;
    align-items: center;

    .nickname {
      margin-left: 8px;
      font-weight: 600;
      font-style: italic;
    }
  }

  .stars {
    margin: 6px 0;
    i {
      color: rgb(245, 176, 63);
    }
  }
`;

function ReviewCard({ name, image, reivew }) {
  return (
    <ReviewCardWrapper>
      <div className="upper">
        <Avatar className="avatar" src={image ? image : ""} />
        <div className="nickname">{name}</div>
      </div>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className="below">{reivew}</div>
    </ReviewCardWrapper>
  );
}

export default ReviewCard;
