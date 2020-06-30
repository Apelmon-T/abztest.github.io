import React from "react";
import Logo from "./Logo/Logo";
import { Navbar } from "react-bootstrap";
import Burger from "./Menu/Burger";
import styled from "styled-components";

const NavbarStyle = styled(Navbar)`
  justify-content: space-between !important;
  top: 0;
  position: fixed !important;
  background: white;
  z-index: 2000;
  width: 100%;
  min-width: 320px;
  max-width: inherit;
  height: 60px;

  @media (max-width: 360px) {
    height: 40px;
  }
`;

const Header = () => {
  return (
    <NavbarStyle bg="white" variant="white">
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Burger />
    </NavbarStyle>
  );
};

export default Header;
