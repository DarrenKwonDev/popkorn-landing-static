import React from "react";
import { FirstBlockStyled } from "../Style";
import { FormattedMessage } from "react-intl";

function FirstBlock() {
  return (
    <FirstBlockStyled>
      <div className="catchphrase">
        <div>
          <FormattedMessage id="EduPopKorn is on a mission" />
          <br />
          <FormattedMessage id="to make Korean language fun and exciting." />
        </div>
      </div>
    </FirstBlockStyled>
  );
}

export default FirstBlock;
