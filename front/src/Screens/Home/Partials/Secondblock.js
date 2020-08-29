import React, { useEffect, useRef } from "react";

import { SecondblockStyle, DownloadButton } from "../Style";

function Secondblock() {
  const canvas = useRef(null);

  // useEffect(() => {
  //   const context = canvas.getContext("2d");
  //   console.log(canvas);

  //   // context.arc(100, 100, 50, 0, Math.PI * 2, false);
  //   // context.fill();
  // }, []);

  return (
    <SecondblockStyle>
      <div className="ImageAndButtons">
        {/* <canvas
          class="canvas"
          width="1000"
          height="600"
          ref={"canvasEl"}
        ></canvas> */}
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
              alt="playstore_logo"
              className="googleplay"
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
    </SecondblockStyle>
  );
}

export default Secondblock;
