import React from "react";
import { SecondblockStyle } from "../Style";
import { FormattedMessage } from "react-intl";

function Secondblock() {
  return (
    <SecondblockStyle>
      <div className="ImageAndButtons">
        <img src={"phone.png"} className="mainImg" alt="phoneImage"></img>
      </div>

      <div className="descWrapper">
        <div className="desc1">
          <FormattedMessage id="Get into popkorn" />
          <br />
          <FormattedMessage id="and change your kpop stars" />
          <br />
          <FormattedMessage id="into your personal teachers." />
        </div>
        <div className="desc2">
          <FormattedMessage id="Know your favorite song or drama by heart." />
          <br />
          <FormattedMessage id="Master your Korean." />
        </div>

        <a href={"https://edupopkorn.com"}>
          <div className="discover">
            <span>
              <FormattedMessage id="Discover" />
            </span>
          </div>
        </a>
      </div>
    </SecondblockStyle>
  );
}

export default Secondblock;
