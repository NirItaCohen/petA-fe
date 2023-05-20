import { getAllPets } from "../../utils/DB/Pets/petsCrud";
export const searchFilter = async (searchObject) => {
  const data = await getAllPets();
  const pets = data.data.data.pets;

  let filteredPetsArray = [...pets];

  if (searchObject.petType.length > 0) {
    filteredPetsArray = filteredPetsArray.filter((pet) => {
      return searchObject.petType.includes(pet.type.toLowerCase());
    });
  }

  if (searchFilter.showAdvance === false) {
    // console.log(filteredPetsArray);
    return;
  } else {
    if (searchObject.status.length > 0) {
      filteredPetsArray = filteredPetsArray.filter((pet) => {
        return searchObject.status.includes(pet.adoptionStatus.toLowerCase());
      });
    }
    if (searchObject.height > 0) {
      filteredPetsArray = filteredPetsArray.filter((pet) => {
        switch (searchObject.heightEquality) {
          case "higher":
            return searchObject.height < pet.height;
          case "smaller":
            return searchObject.height > pet.height;
          default:
            return searchObject.height === pet.height;
        }
      });
      if (searchObject.weight > 0) {
        filteredPetsArray = filteredPetsArray.filter((pet) => {
          switch (searchObject.weightEquality) {
            case "higher":
              return searchObject.weight < pet.weight;
            case "smaller":
              return searchObject.height > pet.weight;
            default:
              return searchObject.height === pet.weight;
          }
        });
      }
    }
    // console.log(filteredPetsArray);

    return filteredPetsArray;
  }
};
