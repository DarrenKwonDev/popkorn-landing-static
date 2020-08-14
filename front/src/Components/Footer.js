import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import logotext from "../assets/logotext.svg";

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;

  width: 100vw;
  padding: 2em 5em;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  align-items: start;
  justify-items: center;

  .infoTab {
    justify-self: start;
  }

  .termTab,
  .socialTab,
  .serviceTab {
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="infoTab">
        <img src={logo}></img>
        <img src={logotext}></img>
        <div>
          <div>Edupopkorn, 750, Gukhoe-daero</div>
          <div>Yeongdeungpo-gu, Seoul, Republic of Korea</div>
          <div>Email | edupopkorn@edupopkorn.com</div>
          <div>Tel | 02-7840-9311(Main)</div>
        </div>
      </div>
      <div className="serviceTab">
        <h4>Our service</h4>
        <div>
          <div>Features</div>
          <div>Testimonials</div>
          <div>About Us</div>
        </div>
      </div>
      <div className="termTab">
        <h4>Help</h4>
        <div>
          <div>Privacy Policy</div>
          <div>Terms</div>
        </div>
      </div>
      <div className="socialTab">
        <h4>Social Media</h4>
        <div>
          <div>facebook</div>
          <div>twitter</div>
          <div>instagram</div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
