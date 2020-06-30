import React from "react";
import logo from "../../../assets/img/logo.svg";
import { Navbar } from "react-bootstrap";

const Logo = () => {
  return (
    <Navbar.Brand href="#home">
      <img src={logo} alt="#" />
    </Navbar.Brand>
  );
};

export default Logo;
