import React from "react";
import android from "../../../assets/android.svg";
import apple from "../../../assets/apple.svg";
import startButton from "../../../assets/startButton.svg";

import { FirstBlockStyled, DownloadButton } from "../Style";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <div className="title ButtonWrapper">
        PopKorn makes Korean language Fun and Addictive.
      </div>
      <div className="desc ButtonWrapper">
        Download PopKorn and change your K-Pop stars into your personal teachers
        on your screen.
      </div>
      <div className="ImageAndButtons">
        <img src={"phone.png"} className="mainImg"></img>
        <div className="ButtonWrapper">
          <DownloadButton
            style={{
              backgroundColor: "rgb(59,213,128)",
              color: "black",
              border: "1px solid gray",
              fontWeight: "bold",
            }}
          >
            <img src={"playstore.png"} width={"20px"}></img>
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

{
  /* <div className="Desc">
<img src={startButton} className="startButton"></img>
<div className="playButton">
  <img src={android} className="button-item"></img>
  <img src={apple} className="button-item"></img>
</div>
</div> */
}
