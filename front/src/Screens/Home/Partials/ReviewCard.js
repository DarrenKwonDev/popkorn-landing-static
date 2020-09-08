import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

const ReviewCardWrapper = styled.div`
  padding: 1em;
  margin: 0 4px;

  width: 100%;

  background-color: transparent;
  background-color: white;
  /* box-shadow: 0px 6px 0px 0px rgba(217, 46, 217, 0.3); */
  border-radius: 12px;

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
    margin: 12px 0;
    i {
      color: rgb(245, 176, 63);
    }
  }

  .below {
    white-space: pre-wrap;
    word-break: break-all;
    font-size: 1.25rem;
  }
`;

function ReviewCard({ name, image, reivew }) {
  return (
    <ReviewCardWrapper>
      <div className="upper">
        <Avatar
          className="avatar"
          src={image ? image : ""}
          icon={<UserOutlined />}
        />
        <div className="nickname">{name ? name : ""}</div>
      </div>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className="below">{reivew ? reivew : ""}</div>
    </ReviewCardWrapper>
  );
}

export default ReviewCard;
