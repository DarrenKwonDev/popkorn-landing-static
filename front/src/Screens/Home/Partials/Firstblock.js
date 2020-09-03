import React from "react";

import { FirstBlockStyled, DownloadButton } from "../Style";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <div className="imageAndTitle">
        <img src={"man.png"} alt="man" className="manImage" />
        <div className="headTitleWrapper">
          <div className="title">
            PopKorn makes
            <br /> Korean language <br /> Fun and Addictive.
          </div>
          <div className="ButtonWrapper">
            <DownloadButton
              className="android"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={"playstore.png"}
                alt="playstore_logo"
                className="googleplay"
              ></img>
              Google Play
            </DownloadButton>
            <DownloadButton className="apple">
              <i className="fab fa-apple"></i>
              App store
            </DownloadButton>
            <DownloadButton className="web">
              <i className="fas fa-globe-asia"></i>
              PopKorn Web
            </DownloadButton>
          </div>
          {/* <div className="desc">
            Download PopKorn and change your K-Pop stars <br />
            into your personal teachers on your screen.
          </div> */}
        </div>
      </div>
      <div className="downArrow">
        <img src={"down-arrow.png"} alt="downArrow" />
      </div>
    </FirstBlockStyled>
  );
}

export default Firstblock;
