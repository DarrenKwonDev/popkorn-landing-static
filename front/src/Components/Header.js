import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a href="http://www.alipay.com/">Eng</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.taobao.com/">Tiếng Việt</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/">한국어</a>
    </Menu.Item>
    <Menu.Item>
      <a href="http://www.tmall.com/">日本語</a>
    </Menu.Item>
  </Menu>
);

const HeadWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: auto 4fr;
  padding: 1em 3em;

  .left-pane {
    display: flex;
    justify-self: start;
  }

  .right-pane {
    justify-self: end;
    font-size: 1.2em;
    font-weight: bold;
    .item:not(:first-child) {
      margin-left: 3em;
    }
  }
`;

function Header() {
  return (
    <HeadWrapper>
      <div className="left-pane">
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <div className="right-pane">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
        <Link to="/faq" className="item">
          FAQ
        </Link>
        <Link to="/about" className="item">
          About Us
        </Link>
        <Dropdown overlay={menu} className="item">
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Language <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </HeadWrapper>
  );
}

export default Header;
