import React, { useContext, useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { AppContext } from "../../App";
import { getAllPets } from "../../utils/DB/Pets/petsCrud";
import { getUser } from "../../utils/DB/Users/usersCrud";
import { Pet } from "../../components/Pet/Pet";

import "./myPets.css";

export const MyPets = () => {
  const { user } = useContext(AppContext);
  const [pets, setPets] = useState(null);
  const [petsIds, setPetsIds] = useState(null);
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [fosteredPets, setFosteredPets] = useState([]);
  const [likedPets, setLikedPets] = useState([]);

  const userAdoptedPets = async () => {
    if (user !== null) {
      const data = await getUser(user._id);
      const adoptedPetsData = data.data.data.user.petsAdopted;
      if (!adoptedPetsData || adoptedPetsData.length <= 0) {
        return;
      }
      setAdoptedPets(JSON.parse(JSON.stringify(adoptedPetsData)));
    }
    return;
  };

  const userFosteredPets = async () => {
    if (user !== null) {
      const data = await getUser(user._id);
      const fosteredPetsData = data.data.data.user.petsFostered;
      if (!fosteredPetsData || fosteredPetsData.length <= 0) {
        return;
      }
      setFosteredPets(JSON.parse(JSON.stringify(fosteredPetsData)));
    }
    return;
  };

  const userLikedPets = async () => {
    const data = await getUser(user._id);
    const likedPetsData = data.data.data.user.petsLiked;
    const likedUserData = data.data.data.user.userLiked;

    if (!likedPetsData || likedPetsData.length <= 0) {
      return;
    }
    setLikedPets(JSON.parse(JSON.stringify(likedPetsData)));
  };

  const updateAdoptPet = (petId) => {
    const currentPets = [...pets];
    const pet = currentPets.find((pet) => pet._id === petId);
    if (pet === undefined) return;
    pet.adoptionStatus = "Adopted";
    setPets(currentPets);
  };
  const updateFosterPet = (petId) => {
    const currentPets = [...pets];
    const pet = currentPets.find((pet) => pet._id === petId);
    if (pet === undefined) return;
    pet.adoptionStatus = "Fostered";
    setPets(currentPets);
  };

  const updateUi = (petId, action) => {
    console.log("updateUid from my pets");
    switch (action) {
      case "adopt":
        updateAdoptPet(petId);
        break;

      case "foster":
        updateFosterPet(petId);

        break;

      default:
        break;
    }
  };

  const renderUserPets = (satusPets) => {
    if (pets === null || satusPets === null || petsIds === null) {
      return;
    }
    const arr = satusPets.map((pet) => {
      const petIndex = petsIds.indexOf(pet) > -1 ? petsIds.indexOf(pet) : -1;
      return petIndex > -1 ? pets[petIndex] : null;
    });
    return arr.map((item) => {
      return item ? (
        <Pet
          updateUi={updateUi}
          pet={item}
          key={item._id}
          user={user}
          rendering="myPets"
          className="w-100 mx-2"
        />
      ) : null;
    });
  };

  useEffect(() => {
    const getAllPetsDB = async () => {
      const petsDbData = await getAllPets();
      setPets(petsDbData.data.data.pets);
    };
    getAllPetsDB();
  }, []);

  useEffect(() => {
    if (pets) {
      const petIdsArr = pets.map((pet) => pet._id);
      setPetsIds(petIdsArr);
    }
    if (user !== null) {
      userAdoptedPets();
      userFosteredPets();
      userLikedPets();
    }
  }, [pets]);

  const renderAdoptedPets = () => {
    return renderUserPets(adoptedPets);
  };

  const renderFosteredPets = () => {
    return renderUserPets(fosteredPets);
  };

  const renderLikedPets = () => {
    return renderUserPets(likedPets);
  };

  return (
    <Container className="mt-3">
      <div className="pets-wrapper">
        <div className="box">
          <input type="radio" name="box" id="adopted" />
          <label htmlFor="adopted">Adopted Pets</label>
          <div className="content">
            {Array.isArray(adoptedPets) ? renderAdoptedPets() : null}
          </div>
          <input type="radio" name="box" id="fostered" />
          <label htmlFor="fostered">Fostered Pets</label>
          <div className="content">
            {Array.isArray(fosteredPets) ? renderFosteredPets() : null}
          </div>
          <input type="radio" name="box" id="liked" />
          <label htmlFor="liked">Liked Pets</label>
          <div className="content">
            {Array.isArray(likedPets) ? renderLikedPets() : null}
          </div>
        </div>
      </div>
    </Container>
  );
};
