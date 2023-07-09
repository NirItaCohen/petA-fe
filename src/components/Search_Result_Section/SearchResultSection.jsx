import { useEffect, useState } from "react";
import { Pet } from "../Pet/Pet";
import PetsPagination from "../Pets_Pagination/Pagination";

import "./searchResultsSection.css";

export const SearchResultSection = ({
  filteredSearch,
  user,
  setCurrentPage,
  currentPage,
}) => {
  const [pets, setPets] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage, setPetsPerPage] = useState(10);

  useEffect(() => {
    const assginData = () => {
      const arr = filteredSearch;
      setPets(arr);
    };
    assginData();
  }, [filteredSearch]);

  console.log(pets);

  const petsArr = Array.isArray(pets) && pets.length > 0 ? pets : [];

  let lastPetsIndex = currentPage * petsPerPage;
  let firstPetsIndex = lastPetsIndex - petsPerPage;
  let cuurentPets = petsArr.slice(firstPetsIndex, lastPetsIndex);

  const petsContent = cuurentPets.map((pet) => (
    <Pet pet={pet} key={pet._id} user={user} rendering="search" />
  ));

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className=" w-75 mx-2 p-3 d-flex flex-column align-items-center ">
      <h3 className="pt-2">Results</h3>
      {petsContent}
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
