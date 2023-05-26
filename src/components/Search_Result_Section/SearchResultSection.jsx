import { useState } from "react";
import { Pet } from "../Pet/Pet";

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
    return pets.map((pet) => <Pet pet={pet} key={pet._id} user={user} />);
  };

  return (
    <div className="border w-50 mx-2 p-3 d-flex flex-column align-items-center">
      <h3 className="pt-2">Results</h3>

      {Array.isArray(pets) && pets.length > 0 && renderPets()}
    </div>
  );
};
