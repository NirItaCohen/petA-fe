import axios from "axios";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/users/login",
      data: { email, password },
    });
    return res;

  } catch (error) {
    console.log(error.response.data);
  }
};
