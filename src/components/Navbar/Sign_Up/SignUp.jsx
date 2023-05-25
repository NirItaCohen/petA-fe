import { Button, Form, Modal } from "react-bootstrap";

import "./signUp.css";

import useInput from "../../../hooks/useInput";
import { signUp } from "../../../utils/Authentication/signUp";
import { AppContext } from "../../../App";
import { useContext } from "react";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

export const SignUp = ({ showModal }) => {
  const { setUser } = useContext(AppContext);
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastNameInput,
  } = useInput(isNotEmpty);
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
  const {
    value: enteredPasswordConfirm,
    isValid: enteredPasswordConfirmIsValid,
    hasError: passwordConfirmInputHasError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    resetInput: resetPasswordConfirmInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetInput: resetPhoneInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (
    enteredFirstName &&
    enteredLastName &&
    enteredEmail &&
    enteredPassword &&
    enteredPasswordConfirm &&
    enteredPhone
  ) {
    formIsValid = true;
  }

  const handleClose = () => {
    showModal(false);
  };

  const checkPasswords = () => {
    return enteredPassword === enteredPasswordConfirm;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordConfirmIsValid ||
      !enteredPhoneIsValid
    ) {
      return;
    }
    if (!enteredPasswordIsValid && checkPasswords()) {
      return;
    }

    try {
      const newUser = await signUp(
        enteredFirstName,
        enteredLastName,
        enteredEmail,
        enteredPassword,
        enteredPasswordConfirm,
        enteredPhone
      );
      const userData = await newUser.data.data.user;
      setUser(userData);
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetPasswordInput();
      resetPasswordConfirmInput();
      resetPhoneInput();
      showModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const firstNameInputClasses = emailInputHasError
    ? "form-input-control invalid"
    : "form-input-control";
  const lastNameInputClasses = emailInputHasError
    ? "form-input-control invalid"
    : "form-input-control";
  const emailInputClasses = emailInputHasError
    ? "form-input-control invalid"
    : "form-input-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-input-control invalid"
    : "form-input-control";
  const passwordConfirmInputClasses =
    passwordConfirmInputHasError || !checkPasswords()
      ? "form-input-control invalid"
      : "form-input-control";
  const phoneInputClasses = phoneInputHasError
    ? "form-input-control invalid"
    : "form-input-control";

  return (
    <div>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className={firstNameInputClasses}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              name="firstName"
              value={enteredFirstName}
            />
          </Form.Group>
          {firstNameInputHasError && (
            <p className="error-text">First name must not be empty</p>
          )}
          <Form.Group className={lastNameInputClasses}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              name="lastName"
              value={enteredLastName}
            />
          </Form.Group>
          {lastNameInputHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
          <Form.Group className={emailInputClasses}>
            <Form.Label>Email</Form.Label>
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
          <Form.Group className={passwordInputClasses} name="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
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
          <Form.Group className={passwordConfirmInputClasses}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              min={4}
              max={10}
              onChange={passwordConfirmChangeHandler}
              onBlur={passwordConfirmBlurHandler}
              name="confirmPassword"
              value={enteredPasswordConfirm}
            />
          </Form.Group>
          {passwordConfirmInputHasError && (
            <p className="error-text">Confirm password must not be empty</p>
          )}
          {!checkPasswords() && (
            <p className="error-text">Passwords must match</p>
          )}
          <Form.Group className={phoneInputClasses}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              name="phone"
              value={enteredPhone}
            />
          </Form.Group>
          {phoneInputHasError && (
            <p className="error-text">Phone must not be empty</p>
          )}
          <Button variant="primary" type="submit" disabled={!formIsValid}>
            Sign Up
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
