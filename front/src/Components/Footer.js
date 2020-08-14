import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Avatar } from "antd";

const FooterWrapper = styled.div`
  position: absolute;
  /* bottom: 0; */
  border-top: 2px solid #b2bec3;
  margin-top: 5em;

  width: 100%;
  padding: 2em 5em;
  @media all and (max-width: 1023px) {
    padding: 2em;
  }

  line-height: 1.5;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;

  @media all and (max-width: 1023px) {
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr;

    .termTab,
    .socialTab,
    .serviceTab {
      justify-self: start;
      align-self: start;
    }
  }

  align-items: start;
  justify-items: center;

  h4 {
    margin-bottom: 15px;
  }

  .infoTab {
    justify-self: start;
    @media all and (max-width: 1023px) {
      grid-column: 1/ 3;
      .logoImage {
        width: 100px;
      }
    }
  }

  .socialTab {
    justify-self: start;
    @media all and (max-width: 1023px) {
      grid-column: 1/ 3;
    }
  }

  .infoTab,
  .termTab,
  .socialTab,
  .serviceTab {
  }

  .socialTab {
    .social-icon:not(:first-child) {
      margin-left: 15px;
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="infoTab">
        <img src={logo} className="logoImage"></img>
        <div>
          <div>Edupopkorn, 750, Gukhoe-daero</div>
          <div>Yeongdeungpo-gu, Seoul, Republic of Korea</div>
          <div>Email | edupopkorn@edupopkorn.com</div>
          <div>Tel | 02-7840-9311(Main)</div>
          <div>
            © Edupopkorn co., Ltd., 2020. All rights reserved. <br />
            Company Registration Number: 549-81-01712.
          </div>
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
          <Avatar
            className="social-icon"
            icon={<i className="fab fa-facebook-f"></i>}
          ></Avatar>
          <Avatar
            className="social-icon"
            icon={<i className="fab fa-twitter"></i>}
          ></Avatar>
          <Avatar
            className="social-icon"
            icon={<i className="fab fa-instagram"></i>}
          ></Avatar>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
