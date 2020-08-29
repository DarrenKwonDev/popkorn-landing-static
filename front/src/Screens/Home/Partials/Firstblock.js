import React from "react";

import { FirstBlockStyled, DownloadButton } from "../Style";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <div className="imageAndTitle">
        <img src={"man.png"} alt="man" className="manImage" />
        <div className="headTitleWrapper">
          <div className="title">
            <mark
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                lineHeight: "1.5",
              }}
            >
              PopKorn makes Korean language <br /> Fun and Addictive.
            </mark>
          </div>
          <div className="desc">
            Download PopKorn and change your K-Pop stars <br />
            into your personal teachers on your screen.
          </div>
        </div>
      </div>
      <div className="ImageAndButtons">
        <img src={"phone.png"} className="mainImg" alt="phoneImage"></img>
        <div className="ButtonWrapper">
          <DownloadButton
            style={{
              backgroundColor: "rgb(59,213,128)",
              color: "black",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={"playstore.png"}
              width={"20px"}
              alt="playstore_logo"
            ></img>
            Download for Android
          </DownloadButton>
          <DownloadButton
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <i className="fab fa-apple"></i>
            Download for iOS
          </DownloadButton>
          <DownloadButton
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid gray",
              fontWeight: "bold",
            }}
          >
            <i className="fas fa-globe-asia"></i>
            PopKorn Web
          </DownloadButton>
        </div>
      </div>
    </FirstBlockStyled>
  );
}

export default Firstblock;
