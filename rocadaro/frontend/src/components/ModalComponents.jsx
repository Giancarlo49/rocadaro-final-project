import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { loginApi } from "../api";
import { useState } from "react";

function ModalComponents({ isModalOpen, handleModalToggle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi({email: email,
              password: password
            });
  };

  //1.
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// 
  return (
    <Modal
      //className="modal show"
      show={isModalOpen}
      centered
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(evt)=>setEmail(evt.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalToggle}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
ModalComponents.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
};

export default ModalComponents;
