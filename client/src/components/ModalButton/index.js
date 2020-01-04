import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Input from '../Styled-Input';
import "./index.scss"


//React-bootstrap. Modals Available at: https://react-bootstrap.github.io/components/modal/ [Accessed: 1 January 2020].

const ModalButton = ({property, color, input1, input2, input3}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={`${color}`} onClick={handleShow}>
        {`${property}`}
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${property}`}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
              <Input name={`${input1}`} type='text' placeholder ={`${input1}`}></Input>
              <Input name={`${input2}`} type='text' placeholder ={`${input2}`}></Input>
              <Input name={`${input3}`} type='text' placeholder ={`${input3}`}></Input>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant={`${color}`} onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalButton;
