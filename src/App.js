import React from "react";

import Header from "./components/Header/Header";
import Relationships from "./components/Relationships/Relationships";
import Requirements from "./components/Requirements/Requirements";
import UsersContainer from "./components/Users/UsersContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import styled from "styled-components";

const Div = styled.div`
  min-width: 360px;
  height: 100%;
  margin-top: 60px;

  @media (max-width: 2560px) {
    margin: 0 auto;
    h1 {
      font-size: 74px;
      line-height: 74px;
    }

    h2 {
      font-size: 52px;
      line-height: 39px;
    }

    p {
      font-size: 42px;
      line-height: 60px;
    }
  }

  @media (max-width: 1440px) {
    margin: 0 auto;
    h1 {
      font-size: 60px;
      line-height: 64px;
    }

    h2 {
      font-size: 32px;
      line-height: 39px;
    }

    p {
      font-size: 24px;
      line-height: 44px;
    }
  }

  @media (max-width: 1170px) {
    margin: 0 auto;
    h1 {
      font-size: 50px;
      line-height: 54px;
    }

    h2 {
      font-size: 24px;
      line-height: 29px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 50px;
      line-height: 54px;
    }

    h2 {
      font-size: 24px;
      line-height: 29px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
      line-height: 44px;
    }

    h2 {
      font-size: 24px;
      line-height: 29px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 30px;
      line-height: 34px;
    }

    h2 {
      font-size: 24px;
      line-height: 29px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const App = () => {
  return (
    <Div>
      <Header />
      <Relationships />
      <Requirements />
      <UsersContainer />
    </Div>
  );
};

export default App;
