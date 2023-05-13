import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const SignUp = ({ showModal }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    showModal(false);
  };

  const checkPasswords = () => {
    return signUpInfo.password === signUpInfo.confirmPassword;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (checkPasswords()) {
      console.log("procceiding to server");
      handleClose();
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              value={signUpInfo.email}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" name="password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password"
              value={signUpInfo.password}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              value={signUpInfo.confrimPassword}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              onChange={handleChange}
              name="phone"
              value={signUpInfo.phone}
              autoFocus
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </div>
  );
};
