import axios from "axios";

export const getAllPets = async () => {
  try {
    const data = await axios.get("http://localhost:8080/pets/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPet = async (petId) => {
  try {
    const data = await axios.get(`http://localhost:8080/pets/${petId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addPet = async (newPet) => {
  try {
    await axios.post("http://localhost:8080/pets/", newPet);
    return "success";
  } catch (error) {
    console.log(error);
  }
};

export const editPet = async (petId, updatedPet) => {
  try {
    await axios.patch(`http://localhost:8080/pets/${petId}`, updatedPet);
    return "success";
  } catch (error) {
    console.log(error);
  }
};

export const deletePet = async (petId) => {
  try {
    await axios.delete(`http://localhost:8080/pets/${petId}`);
    return "success";
  } catch (error) {
    console.log(error);
  }
};
