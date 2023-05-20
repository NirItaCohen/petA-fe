import { Button, Form, Modal } from "react-bootstrap";

import "./signUp.css";

import useInput from "../../../hooks/useInput";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

export const SignUp = ({ showModal }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!enteredEmailIsValid) {
      return;
    }
    if (!enteredPasswordIsValid && checkPasswords()) {
      return;
    }
    if (!enteredPasswordConfirmIsValid) {
      return;
    }
    if (!enteredPhoneIsValid) {
      return;
    }
    const newUser = {
      enteredEmail,
      enteredPassword,
      enteredPasswordConfirm,
      enteredPhone,
    };

    // signUp(newUser)

    resetEmailInput();
    resetPasswordInput();
    resetPasswordConfirmInput();
    resetPhoneInput();
  };

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

// const [signUpInfo, setSignUpInfo] = useState({
//   email: "",
//   password: "",
//   confirmPassword: "",
//   phone: "",
// });

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setSignUpInfo((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };
// const handleFormSubmit = (event) => {
// event.preventDefault();
// if (checkPasswords()) {
//     console.log("procceiding to server");
//     handleClose();
//   } else {
//     console.log("Passwords do not match");
//   }
// };
