import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const Login = ({ showModal }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    showModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              value={loginInfo.email}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              onChange={handleChange}
              name="password"
              value={loginInfo.password}
              autoFocus
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
};
