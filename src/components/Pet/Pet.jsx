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
  updateUi,
  //adminprops

  deleteInstance,
  adminResults,
  openEditModal,
}) => {
  const [like, setLike] = useState(false);
  const [showPetPage, setShowPetPage] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (user.petsLiked.includes(pet._id)) {
      setLike(true);
    }
  }, [pet]);

  const handleLike = () => {
    if (like) {
      setLike(false);
      likeOrUnLike(user._id, pet._id, "patch");
      return;
    }
    if (!like) {
      setLike(true);
      likeOrUnLike(user._id, pet._id, "post");
      return;
    }
  };

  const badgeStatus =
    pet.adoptionStatus === "Adopted"
      ? "success"
      : pet.adoptionStatus === "Fostered"
      ? "info"
      : "primary";

  const adoptPet = async () => {
    const petToChnageStatus = await adoptOrFosterAndRetrun(
      user._id,
      pet._id,
      "adopt",
      "POST"
    );
    if (petToChnageStatus.status === 200) updateUi(pet._id, "adopt");
  };

  const fosterPet = async () => {
    const petToChnageStatus = await adoptOrFosterAndRetrun(
      user._id,
      pet._id,
      "foster",
      "POST"
    );
    if (petToChnageStatus.status === 200) updateUi(pet._id, "foster");
  };
  const returnPet = async () => {
    const returnFunction =
      pet.adoptionStatus === "Adopted"
        ? adoptOrFosterAndRetrun(user._id, pet._id, "adopt", "PATCH")
        : pet.adoptionStatus === "Fostered"
        ? adoptOrFosterAndRetrun(user._id, pet._id, "foster", "PATCH")
        : null;
    return returnFunction;
  };

  const btnClasses =
    pet.adoptionStatus === "Available" ? "m-2" : "m-2 disabled";

  const renderReturnBtn = () => {
    if (user && rendering === "myPets") {
      if (
        (pet.adoptionStatus === "Adopted" 
        // ) ||
        &&
        user.petsAdopted.includes(pet._id)) ||
        (pet.adoptionStatus === "Fostered" 
        // )
        && user.petsFostered.includes(pet._id))
        ) {
          return (
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
    }
    }
    return null;
  };

  const renderAdoptFosterButton = () => {
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
  };

  const handlePetPageButtunClick = () => {
    setShowPetPage(true);
  };

  return (
    <>
      {!showPetPage ? (
        <PetCard
          className="w-100"
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
          rendering={rendering}
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
