import { useContext, useState } from "react";
import { AdmimContext } from "../Admin";
import { Pet } from "../../Pet/Pet";
import { UserCard } from "../../User_Card/UserCard";

import "./adminResultsSection.css";
import PetsPagination from "../../Pets_Pagination/Pagination";

export const AdminResultsSection = () => {
  const { users, pets, toggle, openEditModal, deleteInstance } =
    useContext(AdmimContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage, setPetsPerPage] = useState(10);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const renderPets = () => {
    return currentPets.map((pet) => (
      <Pet
        pet={pet}
        key={pet._id}
        rendering={"admin"}
        openEditModal={openEditModal}
        deleteInstance={deleteInstance}
      />
    ));
  };

  const renderUsers = () => {
    return users.map((user) => (
      <UserCard
        user={user}
        key={user._id}
        rendering={"admin"}
        openEditModal={openEditModal}
        deleteInstance={deleteInstance}
      />
    ));
  };

  const petsArr = Array.isArray(pets) && pets.length > 0 ? pets : [];

  let lastPetsIndex = currentPage * petsPerPage;
  let firstPetsIndex = lastPetsIndex - petsPerPage;
  let currentPets = petsArr.slice(firstPetsIndex, lastPetsIndex);

  return (
    <div
      className=" w-50 mx-2 pb-3 d-flex flex-column align-items-center 
    admin-section"
    >
      <h3 className="pt-1">Results</h3>
      {toggle === "pets" &&
        Array.isArray(pets) &&
        pets.length > 0 &&
        renderPets()}
      {toggle === "users" &&
        Array.isArray(users) &&
        users.length > 0 &&
        renderUsers()}
      {pets && (
        <PetsPagination
          currentPage={currentPage}
          pets={pets}
          petsPerPage={petsPerPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      )}
    </div>
  );
};
