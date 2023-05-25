import { Button, Form, Modal } from "react-bootstrap";

import "./login.css";

import useInput from "../../../hooks/useInput";
import { login } from "../../../utils/Authentication/login";
import { useContext } from "react";
import { AppContext } from "../../../App";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

export const Login = ({ showModal }) => {
  const { setUser } = useContext(AppContext);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput(isEmail);
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (enteredEmail && enteredPassword) {
    formIsValid = true;
  }

  const handleClose = () => {
    showModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!enteredEmailIsValid) {
      return;
    }
    if (!enteredPasswordIsValid) {
      return;
    }
    try {
      const userLoggedIn = await login(enteredEmail, enteredPassword);
      const userData = await userLoggedIn.data.data.user;
      setUser(userData);
      resetEmailInput();
      resetPasswordInput();
      showModal(false);
    } catch (error) {
      console.log(error);
    }

    resetEmailInput();
    resetPasswordInput();
  };

  // Setting style classes for validation indication
  const emailInputClasses = emailInputHasError
    ? "form-input-control invalid"
    : "form-input-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-input-control invalid"
    : "form-input-control";

  return (
    <div>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className={emailInputClasses}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              name="email"
              value={enteredEmail}
            />
          </Form.Group>
          {emailInputHasError && (
            <p className="error-text">Email must not be empty</p>
          )}
          <Form.Group className={passwordInputClasses}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              min={4}
              max={10}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              name="password"
              value={enteredPassword}
            />
          </Form.Group>
          {passwordInputHasError && (
            <p className="error-text">Password must not be empty</p>
          )}
          <Button disabled={!formIsValid} variant="primary" type="submit">
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
