import React, { useState } from "react";
import styled from "styled-components";
import burger from "../../../assets/img/menu_icon.svg";
import { Nav } from "react-bootstrap";
import Menu from "./Menu";
import MenuBurger from "./MenuBurger";

const StyleBurger = styled.div`
  display: none;
  right: 10px;

  @media (max-width: 768px) {
    display: flex;
    margin-left: 60%;
  }

  @media (max-width: 425px) {
    display: flex;
    margin-left: 30%;
  }
`;

const Burger = () => {
  const [open, showMenu] = useState(false);

  const windowWidth = window.innerWidth;
  return (
    <>
      <StyleBurger onClick={() => showMenu(!open)}>
        <img src={burger} alt="" />
      </StyleBurger>
      <Nav>{windowWidth <= 768 ? <MenuBurger open={open} /> : <Menu />}</Nav>
    </>
  );
};

export default Burger;
