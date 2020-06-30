import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import logo from "../../../assets/img/logo.svg";

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

  @media (max-width: 768px) {
    flex-flow: column nowrap !important;
    background-color: white !important;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translate(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 70%;
    transition: transform 0.3s ease-in-out;
  }
`;

const MenuBurger = ({ open }) => {
  return (
    <Navi open={open}>
      <Navbar.Brand href="#home">
        <img src={logo} alt="#" />
      </Navbar.Brand>
      <hr />
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
      <Nav.Link href="#requirements"></Nav.Link>
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
      <Nav.Link href="#terms_and_conditions">Terms and Conditions</Nav.Link>
      <hr />
      <Nav.Link href="#how_it_works">How it works</Nav.Link>
      <Nav.Link href="#partnerships">Partnership</Nav.Link>
      <Nav.Link href="#help">Help</Nav.Link>
      <Nav.Link href="#leave_testmional">Leave testimoinial</Nav.Link>
      <Nav.Link href="#contact">Contact us</Nav.Link>
      <hr />
      <Nav.Link href="#articles">Articles</Nav.Link>
      <Nav.Link href="#news">Our news</Nav.Link>
      <Nav.Link href="#testmional">Testimonials</Nav.Link>
      <Nav.Link href="#licenses">Licenses</Nav.Link>
      <Nav.Link href="#policy">Privacy policy</Nav.Link>
    </Navi>
  );
};

export default MenuBurger;
