import { useState } from "react";
import { Button } from "react-bootstrap";
import { PetPage } from "../../pages/Pet_Page/PetPage";
import { PetCard } from "../../pages/Pet_Card/PetCard";
import "./pet.css";
import { useEffect } from "react";
import { likeOrUnLike } from "../../utils/DB/Users/usersCrud";

export const Pet = ({
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

  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //   likeOrUnLike(user._id, pet._id, "post");
  // }, []);

  const handleLike = () => {
    setLike((prevLike) => !prevLike);
    if (like) {
      likeOrUnLike(user._id, pet._id, "post");
      return;
    } else {
      likeOrUnLike(user._id, pet._id, "patch");
    }
  };

  const badgeStatus =
    pet.adoptionStatus === "Adopted"
      ? "success"
      : pet.adoptionStatus === "Fostered"
      ? "info"
      : "primary";

  const renderReturnBtn = () => {
    const returnBtn = (
      <>
        <Button
          className="m-2"
          variant="outline-danger"
          // onClick={() => deleteInstance("pet", pet._id)}  - RETURN FUNCTION
        >
          Return
        </Button>
      </>
    );
    return returnBtn;
  };

  const renderAdoptFosterButton = () => {
    if (!user) {
      return;
    }
    const statusBtn = user.petsFostered ? (
      <Button className="m-2" variant="outline-danger">
        {/* // onClick={() => deleteInstance("pet", pet._id)} - ADOPT FUNCTION */}
        Adopt
      </Button>
    ) : (
      <Button
        className="m-2"
        variant="outline-danger"
        // onClick={() => deleteInstance("pet", pet._id)}  - FOSTER FUNCTION
      >
        Foster
      </Button>
    );
    return statusBtn;
  };
  const handlePetPageButtunClick = () => {
    setShowPetPage(true);
  };

  return (
    <>
      {!showPetPage ? (
        <PetCard
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
