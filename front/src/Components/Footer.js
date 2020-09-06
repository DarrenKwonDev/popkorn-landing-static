import React from "react";
import styled from "styled-components";
import logo_red from "../assets/logo_red.svg";

import { Avatar } from "antd";
import { Link } from "react-router-dom";

const FooterWrapper = styled.div`
  /* position: absolute; */
  /* bottom: 0; */
  /* background-color: rgb(234, 234, 234); */
  background-color: #f6f9fc;

  width: 100%;
  padding: 2em 5em;
  color: #6b7684;

  line-height: 1.5;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  align-items: start;
  justify-items: center;

  @media all and (max-width: 1023px) {
    font-size: 1rem;
    padding: 2em;

    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr;

    .termTab,
    .socialTab,
    .serviceTab {
      justify-self: start;
      align-self: start;
    }
  }

  h4 {
    margin-bottom: 15px;
  }

  .infoTab {
    justify-self: start;
    font-size: 16px;
    @media all and (max-width: 1023px) {
      grid-column: 1/ 3;
      font-size: 13px;
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
    @media all and (max-width: 1023px) {
      margin: 16px 0;
    }
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
        <img
          src={logo_red}
          className="logoImage"
          alt="logo"
          style={{ width: "30px" }}
        ></img>
        <div className="companyInfo">
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
          <div>
            <a href="/#features">Features</a>
          </div>
          <div>
            <a href="/#testimonials">Testimonials</a>
          </div>
          <div>
            <Link to="about">About Us</Link>
          </div>
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
