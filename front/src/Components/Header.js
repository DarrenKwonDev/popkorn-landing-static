import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_red from "../assets/logo_red.svg";
import logo from "../assets/logo.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <div>Eng</div>
    </Menu.Item>
    <Menu.Item>
      <div>Tiếng Việt</div>
    </Menu.Item>
    <Menu.Item>
      <div>한국어</div>
    </Menu.Item>
    <Menu.Item>
      <div>日本語</div>
    </Menu.Item>
  </Menu>
);

const drawerImgCss = {
  width: "7rem",
};

const WholeWrapper = styled.div``;

const HeadWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;

  @media all and (max-width: 1023px) {
    background-color: rgb(253, 190, 199);
  }

  grid-template-columns: auto 4fr;
  padding: 1em 2em;

  .left-pane {
    display: flex;
    justify-self: start;

    .logoImage {
      width: 2rem;
      @media all and (max-width: 1023px) {
        /* width: 2rem; */
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

function Header() {
  const [visible, setvisible] = useState(false);

  const onCloseDrawer = () => {
    setvisible(false);
  };

  return (
    <WholeWrapper>
      <HeadWrapper>
        <div className="left-pane">
          <Link to="/">
            <img src={logo_red} className="logoImage" alt="logo"></img>
          </Link>
        </div>
        <div className="right-pane">
          <Link to="/" className="item">
            Home
          </Link>

          <Link to="/faq" className="item">
            FAQ
          </Link>
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
              setvisible(true);
            }}
          ></i>
        </div>
      </HeadWrapper>

      {/* drawer */}
      <DrawerWrapper
        title="Basic Drawer"
        placement="top"
        closable={true}
        onClose={() => {
          setvisible(false);
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
        visible={visible}
        forceRender={true}
        style={{}}
      >
        <div>
          <Link to="/" className="drawerItems" onClick={onCloseDrawer}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/faq" className="drawerItems" onClick={onCloseDrawer}>
            FAQ
          </Link>
        </div>
        <div>
          <Link to="/about" className="drawerItems" onClick={onCloseDrawer}>
            About Us
          </Link>
        </div>
        <div className="LangButtonWrapper">
          <LanguageButton>Kor</LanguageButton>
          <LanguageButton>Eng</LanguageButton>
          <LanguageButton>Việt</LanguageButton>
          <LanguageButton>日本語</LanguageButton>
        </div>
      </DrawerWrapper>
    </WholeWrapper>
  );
}

export default Header;
