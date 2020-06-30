import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Jumbotrony = styled(Jumbotron)`
  background-color: #f9f9f3;
  text-align: center;
  img {
    border-radius: 100%;
  }

  h2,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    margin-top: 20px;
  }

  p {
    margin-top: 17px;
  }

  button {
    background-color: #ef5b4c;
    text-decoration: none !important;
    border-style: none !important;
  }
  button:hover {
    background-color: #b13224 !important;
  }

  @media (max-width: 2560px) {
    h1 {
      margin-top: 70px;
    }
    .user-column {
      margin-top: 50px;
    }
    button {
      width: 15%;
      margin-top: 25px;
      margin-bottom: 50px;
      font-size: 32px;
    }
  }

  @media (max-width: 1700px) {
    button {
      font-size: 22px;
    }
  }

  @media (max-width: 1440px) {
    button {
      width: 20%;
      margin-top: 25px;
      margin-bottom: 50px;
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      margin-top: 70px;
    }
    .user-column {
      margin-top: 50px;
    }
    button {
      width: 25%;
      margin-top: 25px;
      margin-bottom: 50px;
      font-size: 16px;
    }
  }

  @media (max-width: 575px) {
    h1 {
      margin-top: 50px;
    }
    .user-column {
      margin-top: 30px;
    }
    button {
      width: 70%;
      margin-top: 40px;
      margin-bottom: 50px;
    }
  }
`;

const Users = (props) => {
  const header = "Our cheerful users";
  const attention = "Attention! Sorting users by registration date";

  const { users, pageSize, showMore } = props;
  return (
    <Jumbotrony id="users">
      <h1>{header}</h1>
      <p>{attention}</p>
      <Row>
        {props.users.map((user) => {
          const { id, photo, name, position, email, phone } = user;
          return (
            <Col xs="12" sm="4" md="4" lg="4" xl="4" key={id}>
              <div className="user-column">
                <Col>
                  <img src={photo} alt="" />
                  <Tippy content={name}>
                    <h2>{name}</h2>
                  </Tippy>
                  <p>{position}</p>
                  <Tippy content={email}>
                    <p className="email">{email}</p>
                  </Tippy>
                  <p className="phone">{phone}</p>
                </Col>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="button">
        {users.length >= pageSize && (
          <Button variant="danger" onClick={showMore}>
            Show more
          </Button>
        )}
      </div>
    </Jumbotrony>
  );
};

export default Users;
