import axios from "axios";

export const signUp = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
  phone
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/users/signup",
      data: {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        phone,
      },
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error.response.data);
  }
};
