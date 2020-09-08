import React from "react";

import Arrow from "./Arrow";
import { FirstBlockStyled, DownloadButton } from "../Style";
import { FormattedMessage } from "react-intl";

function Firstblock() {
  return (
    <FirstBlockStyled className="firstBlock">
      <div className="imageAndTitle">
        <img src={"man.png"} alt="man" className="manImage" />
        <div className="headTitleWrapper">
          <div className="title">
            <FormattedMessage id="PopKorn makes" />
            <br />
            <FormattedMessage id="Korean language" />
            <br />
            <FormattedMessage id="Fun and Addictive." />
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
        </div>
      </div>
      <Arrow />
    </FirstBlockStyled>
  );
}

export default Firstblock;
