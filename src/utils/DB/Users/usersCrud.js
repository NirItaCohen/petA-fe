import axios from "axios";

export const getAllUsers = async () => {
  try {
    const data = await axios.get("http://localhost:8080/users/", {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (userId) => {
  try {
    const data = await axios.get(`http://localhost:8080/users/${userId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (newUser) => {
  try {
    await axios.post(`http://localhost:8080/users/`, newUser, {
      withCredentials: true,
    });
    return "success";
  } catch (error) {}
};

export const editUser = async (userId, updatedUser) => {
  try {
    await axios.patch(`http://localhost:8080/users/${userId}`, updatedUser, {
      withCredentials: true,
    });
    return "success";
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`http://localhost:8080/users/${userId}`, {
      withCredentials: true,
    });
    return "success";
  } catch (error) {
    console.log(error);
  }
};

export const adoptOrFosterAndRetrun = async (
  userId,
  petId,
  method,
  httpMethod
) => {
  try {
    return await axios({
      method: httpMethod,
      url: `http://localhost:8080/users/${userId}/${petId}&method=${method}`,
      withCredentials: true,
    });
  } catch (error) {}
};

export const likeOrUnLike = async (userId, petId, httpMethod) => {
  try {
    await axios({
      method: httpMethod,
      url: `http://localhost:8080/users/${userId}/${petId}&method=like`,
      withCredentials: true,
    });
  } catch (error) {}
};
