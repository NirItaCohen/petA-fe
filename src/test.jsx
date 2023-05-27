import { useState } from "react";
import { Button } from "react-bootstrap";
import { PetPage } from "../../pages/Pet_Page/PetPage";
import { PetCard } from "../../pages/Pet_Card/PetCard";
import "./pet.css";
import { useEffect } from "react";
import {
  adoptOrFosterAndRetrun,
  likeOrUnLike,
} from "../../utils/DB/Users/usersCrud";

export const Pet = ({
  rendering,
  //mypets props
  pet,
  user,
  //adminprops
  deleteInstance,
  adminResults,
  openEditModal,
}) => {
  const [like, setLike] = useState(false);
  const [showPetPage, setShowPetPage] = useState(false);

  const adoptPet = async () => {
    const petToChnageStatus = await adoptOrFosterAndRetrun(
      user._id,
      pet._id,
      "adopt",
      "POST"
    );
    console.log(pet);
  };

  const fosterPet = async () => {
    const petToChnageStatus = await adoptOrFosterAndRetrun(
      user._id,
      pet._id,
      "foster",
      "POST"
    );
    console.log(pet);
  };
  const returnPet = async () => {
    pet.adoptionStatus === "Adopted"
      ? adoptOrFosterAndRetrun(user._id, pet._id, "adopt", "PATCH")
      : adoptOrFosterAndRetrun(user._id, pet._id, "foster", "PATCH");
  };
  const renderReturnBtn = (status) => {
    const returnBtn = status !== "" && (
      <>
        <Button
          className="m-2"
          variant="outline-danger"
          onClick={() => returnPet()}
        >
          Return
        </Button>
      </>
    );
    return returnBtn;
  };

  const btnClasses =
    pet.adoptionStatus === "Available" ? "m-2" : "m-2 disabled";

  const checkStatusToRender = () => {
    let petStatusForBtn = "";
    if (user.petsAdopted.includes(pet._id)) {
      return (petStatusForBtn = "adopted");
    } else if (user.petsFostered.includes(pet._id)) {
      return (petStatusForBtn = "fostered");
    }
    return petStatusForBtn;
  };

  const createButton = () => {
    const status = checkStatusToRender();
    const text = status === "adopted" ? "Adopt" : "Foster";

    const statusChangeFunction =
      status === "adopted" ? adoptPet() : fosterPet();
    if (status === "") {
      return (
        <>
          <Button
            className={btnClasses}
            variant="outline-danger"
            onClick={() => adoptPet()}
          >
            Adopt
          </Button>

          <Button
            className={btnClasses}
            variant="outline-danger"
            onClick={() => fosterPet()}
          >
            Foster
          </Button>
        </>
      );
    }
    const button = (
      <>
        <Button
          className={btnClasses}
          variant="outline-danger"
          onClick={() => statusChangeFunction()}
        >
          {text}
        </Button>
        ;
      </>
    );
    return button;
  };

  const renderAdoptFosterButton = (status) => {
    if (!user) return;

    createButton();
  };

  const handlePetPageButtunClick = () => {
    setShowPetPage(true);
  };

  return (
    <>
      {!showPetPage ? (
        <PetCard
          rendering={rendering}
          pet={pet}
          adminResults={adminResults}
          user={user}
          badgeStatus={badgeStatus}
          showPetPage={showPetPage}
          deleteInstance={deleteInstance}
          handleLike={handleLike}
          openEditModal={openEditModal}
          like={like}
          setLike={setLike}
          setShowPetPage={handlePetPageButtunClick}
          renderAdoptFosterButton={renderAdoptFosterButton}
          renderReturnBtn={renderReturnBtn}
        />
      ) : (
        <PetPage
          className="w-100"
          pet={pet}
          user={user}
          badgeStatus={badgeStatus}
          handleLike={handleLike}
          renderReturnBtn={renderReturnBtn}
          renderAdoptFosterButton={renderAdoptFosterButton}
          like={like}
          setLike={setLike}
          setShowPetPage={setShowPetPage}
        />
      )}
    </>
  );
};
