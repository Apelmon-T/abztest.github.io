import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const WindowModal = styled(Modal)`
  margin-top: 18%;

  div.modal-content > div.modal-footer > button.btn {
    background-color: #ef5b4c !important;
  }
  div.modal-content > div.modal-footer > button.btn {
    background-color: #b13224 !important;
  }
`;

const ModalWindow = (props) => {
  const { show, onHide, titleText, bodyText, btnText } = props;
  return (
    <WindowModal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          {btnText}
        </Button>
      </Modal.Footer>
    </WindowModal>
  );
};

export default ModalWindow;
