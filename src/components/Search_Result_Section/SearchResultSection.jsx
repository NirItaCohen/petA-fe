import { useState } from "react";

import { Pet } from "../Pet/Pet";
import PetsPagination from "../Pets_Pagination/Pagination";

import "./searchResultsSection.css";

export const SearchResultSection = ({ filteredSearch, user }) => {
  const [pets, setPets] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);
  const [petsPerPage, setPetsPerPage] = useState(10);

  const assginData = async () => {
    const arr = await filteredSearch;
    setPets(arr);
  };

  if (filteredSearch !== null) {
    assginData();
  }

  const petsArr = Array.isArray(pets) && pets.length > 0 ? pets : [];

  let lastPetsIndex = currentPage * petsPerPage;
  let firstPetsIndex = lastPetsIndex - petsPerPage;
  let cuurentPets = petsArr.slice(firstPetsIndex, lastPetsIndex);

  const petsContent = cuurentPets.map((pet) => (
    <Pet pet={pet} key={pet._id} user={user} rendering="search" />
  ));

  return (
    <div className=" w-75 mx-2 p-3 d-flex flex-column align-items-center ">
      <h3 className="pt-2">Results</h3>
      {petsContent}
      <PetsPagination
        totalPets={petsArr.length}
        petsPerPage={petsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
