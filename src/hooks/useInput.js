import { useState } from "react";

const useInput = (validateValueFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  const valueIsValid = validateValueFunction(enteredValue);

  const hasError = !valueIsValid && isTouched;

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
