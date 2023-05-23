import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./petCard.css";

export const PetCard = ({
  adminResults,
  pet,
  openEditModal,
  deleteInstance,
  user,
}) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prevLike) => !prevLike);
  };

  const badgeStatus =
    pet.adoptionStatus === "Adopted"
      ? "success"
      : pet.adoptionStatus === "Fostered"
      ? "info"
      : "primary";

  const renderReturnBtn = () => {
    return (
      <>
        <Button
          className="m-2"
          variant="outline-danger"
          // onClick={() => deleteInstance("pet", pet._id)}  - RETURN FUNCTION
        >
          Return
        </Button>
        ;
      </>
    );
  };

  const renderAdoptFosterButton = () => {
    return user.petsFosered ? (
      <Button
        className="m-2"
        variant="outline-danger"
        // onClick={() => deleteInstance("pet", pet._id)}  - ADOPT FUNCTION
      >
        Adopt
      </Button>
    ) : (
      <Button
        className="m-2"
        variant="outline-danger"
        // onClick={() => deleteInstance("pet", pet._id)}  - FOSTER FUNCTION
      >
        FOSTER
      </Button>
    );
  };

  return (
    <>
      <Card className="w-75 my-3">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="d-2">{pet.name}</Card.Title>
          <div className="d-flex w-100 ">
            <div className="d-flex align-items-start flex-column w-50">
              <span className="pet-details">
                <p className="warning-text-emphasis">
                  Adoption Status -
                  <Badge className="ms-2" bg={badgeStatus}>
                    {pet.adoptionStatus}
                  </Badge>
                </p>
              </span>
              <span className="pet-details">Breed: {pet.breed}</span>
            </div>
            <Card.Img
              className="w-50 ratio ratio-16x9"
              width={160}
              height={210}
              variant="top"
              src={pet.picture}
            />
          </div>
        </Card.Body>
        <div className="d-flex m-1 justify-content-between align-items-center">
          <Link
            className="pet-link btn btn-outline-primary "
            to={`/pet/${encodeURIComponent(JSON.stringify(pet))}`}
          >
            {pet.name}'s page
          </Link>
          {adminResults === true ? (
            <div>
              <Button
                className="m-2"
                variant="outline-warning"
                onClick={() => openEditModal("pet", pet)}
              >
                Edit
              </Button>
              <Button
                className="m-2"
                variant="outline-danger"
                onClick={() => deleteInstance("pet", pet._id)}
              >
                Delete
              </Button>
            </div>
          ) : null}
          {user ? renderReturnBtn() : null}
          {user ? renderAdoptFosterButton() : null}

          <Card.Body>
            <h2 className="like-heart" onClick={handleLike}>
              {like ? "🧡" : "🤍"}
            </h2>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};
