import React, { useContext, useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { AppContext } from "../../App";
import { PetCard } from "../Pet_Card/PetCard";
import { getAllPets } from "../../utils/DB/Pets/petsCrud";
import { getUser } from "../../utils/DB/Users/usersCrud";
import { Pet } from "../../components/Pet/Pet";

export const MyPets = () => {
  const { user } = useContext(AppContext);
  const [pets, setPets] = useState(null);
  const [petsIds, setPetsIds] = useState(null);
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [fosteredPets, setFosteredPets] = useState([]);
  // const [status, setStatus] = useState("avaliable")

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
        <Pet pet={item} key={item._id} user={user} className="w-100" />
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
    userAdoptedPets();
    userFosteredPets();
  }, [pets]);

  const renderAdoptedPets = () => {
    return renderUserPets(adoptedPets);
  };

  const renderFosteredPets = () => {
    return renderUserPets(fosteredPets);
  };

  return (
    <Container className="mt-3">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Adopted Pets</Accordion.Header>
          <Accordion.Body className="w-100">
            {Array.isArray(adoptedPets) ? renderAdoptedPets() : null}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Fostereds Pets</Accordion.Header>
          <Accordion.Body>
            {Array.isArray(fosteredPets) ? renderFosteredPets() : null}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
