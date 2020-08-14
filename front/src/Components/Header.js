import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import logotext from "../assets/logotext.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
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
          <img src={logotext}></img>
        </Link>
      </div>
      <div className="right-pane">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
        <Link to="/qna" className="item">
          QnA
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
