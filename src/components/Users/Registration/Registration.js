import React, { useState } from "react";
import FieldFileInput from "./FieldFileInput/FieldFileInput";
import { Field, reduxForm } from "redux-form";
import {
  requiredField,
  minLengthCreator,
  maxLengthCreator,
  emailPattern,
  phonePattern,
  validPosition,
  photoValidating,
} from "../../../utils/validators";
import { Input } from "../../commons/FormsControls";
import axios from "axios";
import ModalWindow from "./ModalWindow/ModalWindow";
import { Form, Col, Row, Button } from "react-bootstrap";
import styled from "styled-components";

const Column = styled(Col)`
  text-align: center;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 1% 2%;
  }

  @media (max-width: 2560px) {
    h1 {
      margin-top: 20%;
    }
    p {
      margin-top: 5%;
    }
    div.form {
      margin-top: 5%;
    }
  }

  @media (max-width: 575px) {
    h1 {
      margin-top: 80px;
    }
    p {
      margin-top: 20px;
    }
    div.form {
      margin-top: 30px;
    }
  }
`;

const Registration = (props) => {
  const [show, setState] = useState(false);

  const handleClose = () => setState(false);

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("photo", values.photo);
    formData.append("position_id", Number(values.position_id));

    const token = await axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((response) => {
        return response.data.token;
      });

    await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: {
          Token: token,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          setState(true);
          // TODO showModal
          // process success response
        } else {
          // proccess server errors
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const header = "Register to get a work";
  const attention =
    "Attention! After successful registration and alert, update the list of users in the block from the top";

  const modalTitleText = "Congratulations";
  const modalBodyText = "You have successfully passed the registration";
  const modalbBtnText = "Great";

  return (
    <Column xs="12" sm="12" md="8" lg="8" xl="6">
      <h1>{header}</h1>
      <p>{attention}</p>
      <div className="form">
        <RegistrationReduxForm
          positions={props.positions}
          onSubmit={onSubmit}
        />
      </div>
      <ModalWindow
        show={show}
        onHide={handleClose}
        titleText={modalTitleText}
        bodyText={modalBodyText}
        btnText={modalbBtnText}
      />
    </Column>
  );
};

const maxLengthName = maxLengthCreator(60);
const minLengthName = minLengthCreator(2);
const maxLengthEmail = maxLengthCreator(100);
const minLengthEmail = minLengthCreator(2);

const RegForm = styled(Form)`
  div.form-group {
    text-align: left;
  }

  div.form-group > div.FormsControl_formControl__1dVjh {
    opacity: 0.5;
    border-radius: 6px;
  }

  div > button.btn {
    background-color: #ef5b4c !important;
  }
  div > button.btn:hover {
    background-color: #b13224 !important;
  }

  @media (max-width: 2560px) {
    label {
      font-size: 22px;
    }
    input {
      heigth: 5%;
    }
    button {
      margin-top: 7%;
      margin-bottom: 15%;
      width: 35%;
      font-size: 32px;
    }
    .abz {
      margin-bottom: 5%;
    }
  }

  @media (max-width: 1700px) {
    label {
      font-size: 18px;
    }
    button {
      font-size: 22px;
    }
  }

  @media (max-width: 1440px) {
    button {
      width: 40%;
      font-size: 18px;
    }
    .abz {
      margin-bottom: 5%;
    }
  }

  @media (max-width: 1024px) {
    label {
      font-size: 16px;
    }
    button {
      width: 35%;
      font-size: 16px;
    }
  }

  @media (max-width: 575px) {
    button {
      margin-top: 30px;
      margin-bottom: 60px;
      width: 70%;
    }
    .abz {
      margin-bottom: 20px;
    }
  }
`;

const RegistrationForm = (props) => {
  const { handleSubmit, positions } = props;
  return (
    <RegForm onSubmit={handleSubmit} name="registration">
      <Col>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Field
            placeholder={"Your name"}
            component={Input}
            name={"name"}
            validate={[requiredField, minLengthName, maxLengthName]}
          />
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Field
            placeholder={"Your email"}
            component={Input}
            type={"email"}
            name={"email"}
            validate={[
              requiredField,
              minLengthEmail,
              maxLengthEmail,
              emailPattern,
            ]}
          />
        </Form.Group>

        <Form.Group controlId="formGroupPhone">
          <Form.Label>Phone number</Form.Label>
          <Field
            placeholder="+380 XX XXX XX XX"
            component={Input}
            type={"tel"}
            name={"phone"}
            validate={[requiredField, phonePattern]}
          />
          <Form.Label className="attention">
            Enter phone number in open format
          </Form.Label>
        </Form.Group>

        <Form.Group>
          <Form.Label>Select your position</Form.Label>
          <Col>
            {positions.map((position) => {
              const { id, name } = position;
              return (
                <Row key={id}>
                  <Col xs="2" sm="2" md="2" lg="2" xl="1">
                    <Field
                      id="radio"
                      component={Input}
                      type={"radio"}
                      name={"position_id"}
                      value={String(id)}
                      validate={validPosition}
                    />
                  </Col>
                  <Form.Label htmlFor="radio">{name}</Form.Label>
                </Row>
              );
            })}
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Photo</Form.Label>
          <Field
            type="file"
            name="photo"
            component={FieldFileInput}
            validate={photoValidating}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Sign up now
        </Button>
      </Col>
      <hr />
      <div className="abz">© abz.agency specially for the test task</div>
    </RegForm>
  );
};

const RegistrationReduxForm = reduxForm({
  form: "registration",
  validPosition,
})(RegistrationForm);

export default Registration;
