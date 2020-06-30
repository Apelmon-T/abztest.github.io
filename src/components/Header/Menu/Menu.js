import React from "react";
import { Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

const Navi = styled(Nav)`
  display: flex;
  flex-flow: row nowrap;

  a {
    color: black;
    top: 5px;
    margin-right: 5px;
  }

  a:hover {
    color: #ef5b4c;
  }
`;

const Menu = () => {
  return (
    <Navi>
      <Nav.Link href="#about_me">About me</Nav.Link>
      <Nav.Link href="#relationships">
        <ScrollLink
          activeClass="active"
          to="relationships"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Relationships
        </ScrollLink>
      </Nav.Link>
      <Nav.Link href="#requirements">
        <ScrollLink
          activeClass="active"
          to="requirements"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Requirements
        </ScrollLink>
      </Nav.Link>
      <Nav.Link href="#users">
        <ScrollLink
          activeClass="active"
          to="users"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Users
        </ScrollLink>
      </Nav.Link>
      <Nav.Link href="#sign_up">
        <ScrollLink
          activeClass="active"
          to="registration"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Sign Up
        </ScrollLink>
      </Nav.Link>
    </Navi>
  );
};

export default Menu;
