import React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import photo from "../../assets/img/banner-photo.jpg";

const Jumbotrony = styled(Jumbotron)`
  color: white;
  background-image: url(${photo});
  background-size: cover;

  height: 100%;
  margin-bottom: 0px !important;
  border-radius: 0px !important;

  .relationships-column {
    margin-top: 60px;
  }

  div > p button {
    background-color: #ef5b4c !important;
    border-style: none !important;
    outline: none !important;
  }

  div > p button:hover {
    background-color: #b13224 !important;
  }

  @media (max-width: 2560px) {
    h1 {
      margin-top: 18%;
    }
    p {
      margin-top: 10%;
    }
    button {
      width: 30%;
      margin-bottom: 8%;
      font-size: 32px;
    }
  }

  @media (max-width: 1700px) {
    button {
      font-size: 22px;
    }
  }

  @media (max-width: 1440px) {
    p {
      margin-top: 80px;
    }
    button {
      width: 40%;
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    p {
      margin-top: 50px;
    }
    button {
      width: 30%;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    p {
      margin-top: 40px;
    }
    button {
      width: 40%;
    }
  }

  @media (max-width: 575px) {
    .relationships-column {
      text-align: center;
    }
    p {
      margin-top: 45px;
    }
    button {
      width: 70%;
      margin-bottom: 35px;
    }
  }
`;

const Relationships = () => {
  const heading = "TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION";
  const text =
    "We kindly remind you that you test assignment should be sumbitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meet minimum requirements. We look forwardto your submission. Good Luck! The photo has to scale in the banner area on the different screens";
  const textSecond =
    "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.";
  const button = "Sign up now";

  const WindowWidth = window.innerWidth;
  return (
    <Jumbotrony id="relationships">
      <Row>
        <div className="relationships-column">
          <Col xs="12" sm="8" md="8" lg="7" xl="7">
            <h1>{heading}</h1>
            <p>{WindowWidth > 375 ? text : textSecond}</p>
            <p>
              <Button variant="danger">
                <ScrollLink
                  activeClass="active"
                  to="registration"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  {button}
                </ScrollLink>
              </Button>
            </p>
          </Col>
        </div>
      </Row>
    </Jumbotrony>
  );
};

export default Relationships;
