import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_red from "../assets/logo_red.svg";
import logo from "../assets/logo.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const setKOLanguage = () => {
  localStorage.setItem("lang", "ko");
  window.location.reload();
};
const setENLanguage = () => {
  localStorage.setItem("lang", "en");
  window.location.reload();
};
const setVNLanguage = () => {
  localStorage.setItem("lang", "vn");
  window.location.reload();
};

const menu = (
  <Menu>
    <Menu.Item onClick={setENLanguage}>
      <div>Eng</div>
    </Menu.Item>
    <Menu.Item onClick={setVNLanguage}>
      <div>Tiếng Việt</div>
    </Menu.Item>
    <Menu.Item onClick={setKOLanguage}>
      <div>한국어</div>
    </Menu.Item>
  </Menu>
);

const drawerImgCss = {
  width: "7rem",
};

const WholeWrapper = styled.div`
  .down {
    background-color: rgba(255, 255, 255, 1) !important;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    transition: all 0.2s;
  }
`;

const HeadWrapper = styled.div`
  position: fixed;
  z-index: 100;

  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 75px;

  background-color: transparent;

  grid-template-columns: auto 4fr;
  padding: 1em 2em;

  @media all and (max-width: 1023px) {
    height: 50px;
    padding: 0.5em 2em;
  }

  .left-pane {
    display: flex;
    align-items: center;
    justify-self: start;

    .logoImage {
      display: inline-block;
      width: 2rem;
      @media all and (max-width: 1023px) {
        /* width: 2rem; */
      }
    }

    .logotext {
      margin-left: 16px;
      font-size: 1.5rem;
      font-weight: 600;
      color: rgb(231, 40, 106);

      @media all and (max-width: 1023px) {
        margin-left: 8px;
        font-size: 1rem;
      }
    }
  }

  .right-pane {
    justify-self: end;
    font-size: 1.2em;
    font-weight: bold;

    .item:not(:first-child) {
      margin-left: 3em;
    }
  }
  .hamberger {
    display: none;
  }

  @media all and (max-width: 1023px) {
    .right-pane {
      display: none;
    }
    .hamberger {
      display: inline-block;
      justify-self: end;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
`;

const DrawerWrapper = styled(Drawer)`
  .drawerItems {
    font-size: 20px;
  }

  .LangButtonWrapper {
    margin-top: 16px;
  }
`;

const LanguageButton = styled.button`
  border: none;
  background-color: rgb(226, 228, 231);
  margin-right: 8px;
`;

class Header extends React.Component {
  state = {
    visible: false,
    className: "",
  };

  onCloseDrawer = () => {
    this.setState({ visible: false });
  };

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.className) {
        this.setState({ className: "down" });
      }
    } else {
      this.setState({ className: "" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <WholeWrapper id="header">
        <HeadWrapper className={this.state.className}>
          <Link to="/">
            <div className="left-pane">
              <img src={logo_red} className="logoImage" alt="logo"></img>
              <div className="logotext">EduPopKorn</div>
            </div>
          </Link>
          <div className="right-pane">
            <Link to="/" className="item">
              Home
            </Link>
            {/* <Link to="/faq" className="item"> */}
            <div
              className="item"
              style={{ display: "inline-block", cursor: "pointer" }}
              onClick={() => alert("준비 중입니다")}
            >
              FAQ
            </div>
            {/* </Link> */}
            <Link to="/about" className="item">
              About Us
            </Link>
            <Dropdown overlay={menu} className="item" trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="/#"
              >
                Language <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="hamberger">
            <i
              className="fas fa-bars"
              onClick={() => {
                this.setState({ visible: true });
              }}
            ></i>
          </div>
        </HeadWrapper>

        {/* drawer */}
        <DrawerWrapper
          placement="top"
          closable={true}
          onClose={() => {
            this.setState({ visible: false });
          }}
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Link to="/">
                <img
                  src={logo}
                  className="logoImage"
                  style={drawerImgCss}
                  alt={"drawerLogo"}
                ></img>
              </Link>
            </div>
          }
          visible={this.state.visible}
          forceRender={true}
          style={{}}
        >
          <div>
            <Link to="/" className="drawerItems" onClick={this.onCloseDrawer}>
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/faq"
              className="drawerItems"
              onClick={this.onCloseDrawer}
            >
              FAQ
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              className="drawerItems"
              onClick={this.onCloseDrawer}
            >
              About Us
            </Link>
          </div>
          <div className="LangButtonWrapper">
            <LanguageButton onClick={setKOLanguage}>Kor</LanguageButton>
            <LanguageButton onClick={setENLanguage}>Eng</LanguageButton>
            <LanguageButton onClick={setVNLanguage}>Việt</LanguageButton>
          </div>
        </DrawerWrapper>
      </WholeWrapper>
    );
  }
}

export default Header;
