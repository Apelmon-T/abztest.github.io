import React from "react";

import laptopPhoto from "../../assets/img/man-laptop-v1.svg";
import { Jumbotron, Image, Button, Col, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

const Jumbotrony = styled(Jumbotron)`
  background-color: white !important;
  margin-bottom: 0px !important;
  border-radius: 0px !important;
  height: 100%;
  text-align: justify;
  h1 {
    margin-top: 40px;
    text-align: center;
  }
  div > button {
    color: #ef5b4c;
    text-decoration: none !important;
    border-style: none !important;
  }
  div > button:hover {
    color: #007bff !important;
  }
  img {
    width: 100%;
  }

  @media (max-width: 2560px) {
    h1 {
      margin-top: 100px;
    }
    img {
      width: 90%;
      margin-bottom: 140px;
    }
    .ruquirements-columns {
      display: flex;
      justify-content: center;
      flex-direction: row;
      margin-top: 100px;
    }
    p {
      margin-top: 100px;
    }
    button {
      margin: 40px 0 50px 0;
      font-size: 32px;
    }
  }

  @media (max-width: 1700px) {
    button {
      font-size: 22px;
    }
  }

  @media (max-width: 1440px) {
    .ruquirements-columns {
      display: flex;
      justify-content: center;
      flex-direction: row;
      margin-top: 40px;
    }
    p {
      margin-top: 25px;
    }
    button {
      margin: 20px 0 40px -10%;
      width: 40%;
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    button {
      font-size: 16px;
    }
  }

  @media (max-width: 575px) {
    .ruquirements-columns {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    img {
      margin-top: 20px;
    }
    h2 {
      margin-top: -50px;
      text-align center;
    }
    p {
      margin-top: 30px;
    }
    div > button {
      margin: 20px 0 30px 30%;
    }
  }
`;

const Requirements = () => {
  const header = "Let's get acquainted";
  const secondHeader = "I am cool frontend developer";
  const firstText =
    "We will evaluate how clean your approach to writing CSS and Javacript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.";
  const secondText =
    "If 3rd party css/javacript libraries are added to the project via bower/npm/yarn you will get bonus as well. If you use any task runner gulp/webpack you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.";
  const link = "Sign up now";

  return (
    <Jumbotrony id="requirements">
      <h1>{header}</h1>
      <Row>
        <Col>
          <div className="ruquirements-columns">
            <Col xs="12" sm="5" md="5" lg="5" xl="5">
              <Image src={laptopPhoto} rounded />
            </Col>
            <div>
              <h2>{secondHeader}</h2>
              <p>{firstText}</p>
              <p>{secondText}</p>
              <Button variant="link">
                <ScrollLink
                  activeClass="active"
                  to="registration"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  {link}
                </ScrollLink>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Jumbotrony>
  );
};

export default Requirements;
