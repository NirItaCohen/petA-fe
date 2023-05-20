import { useContext } from "react";
import { AdmimContext } from "../Admin";
import { PetCard } from "../../Pet_Card/PetCard";
import { UserCard } from "../../User_Card/UserCard";

export const AdminResultsTab = () => {
  const { users, pets, toggle, editInstance, deleteInstance} = useContext(AdmimContext);

  const renderPets = () => {
    return pets.map((pet) => (
      <PetCard pet={pet} key={pet._id} adminResults={true} editInstance={editInstance} deleteInstance={deleteInstance} />
    ));
  };
  const renderUsers = () => {
    return users.map((user) => (
      <UserCard user={user} key={user._id} adminResults={true} />
    ));
  };

  return (
    <div className="border w-50 mx-2 p-3 d-flex flex-column align-items-center">
      <h3 className="pt-2">Results</h3>
      {toggle === "pets" &&
        Array.isArray(pets) &&
        pets.length > 0 &&
        renderPets()}
      {toggle === "users" &&
        Array.isArray(users) &&
        users.length > 0 &&
        renderUsers()}
    </div>
  );
};
