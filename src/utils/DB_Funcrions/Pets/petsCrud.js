import axios from "axios";

const getAllPets = async () => {
  try {
    const data = await axios.get("http://localhost:8080/pets/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPets;
