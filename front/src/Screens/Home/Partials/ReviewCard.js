import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";

const ReviewCardWrapper = styled.div`
  width: 300px;
  height: 225px;
  border-radius: 12px;

  padding: 1em;

  background-color: white;
  box-shadow: 0px 6px 0px 0px rgba(217, 46, 217, 0.3);

  @media all and (max-width: 1023px) {
    width: 300px;
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
