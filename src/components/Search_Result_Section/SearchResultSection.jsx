import { useState } from "react";
import { Pet } from "../Pet/Pet";

import "./searchResultsSection.css";

export const SearchResultSection = ({ filteredSearch, user }) => {
  const [pets, setPets] = useState(null);

  const assginData = async () => {
    const arr = await filteredSearch;
    setPets(arr);
  };

  if (filteredSearch !== null) {
    assginData();
  }

  const renderPets = () => {
    return pets.map((pet) => (
      <Pet pet={pet} key={pet._id} user={user} rendering="search" />
    ));
  };

  return (
    <div className=" w-75 mx-2 p-3 d-flex flex-column align-items-center ">
      <h3 className="pt-2">Results</h3>

      {Array.isArray(pets) && pets.length > 0 && renderPets()}
    </div>
  );
};
