import axios from "axios";

const getAllUsers = async () => {
  try {
    const data = await axios.get("http://localhost:8080/users/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
