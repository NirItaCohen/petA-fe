import { Badge, Button, Card } from "react-bootstrap";

export const PetCard = ({
  pet,
  user,
  rendering,
  badgeStatus,
  setShowPetPage,
  adminResults,
  deleteInstance,
  like,
  handleLike,
  renderReturnBtn,
  renderAdoptFosterButton,
  openEditModal,
}) => {
  return (
    <>
      <Card className="w-100 my-3">
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
          <Button
            style={{ color: "white" }}
            className="pet-link btn btn-outline-primary "
            onClick={() => setShowPetPage()}
          >
            {pet.name}'s page
          </Button>
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

          <Card.Body>
            {user && rendering !== "admin" ? (
              <h2 className="like-heart" onClick={handleLike}>
                {like ? "🧡" : "🤍"}
              </h2>
            ) : null}
          </Card.Body>
          <Card.Body>
            {(user &&
              rendering === "myPets" &&
              pet.adoptionStatus === "Fostered") ||
              pet.adoptionStatus === "Adopted"
              ? renderReturnBtn()
              : null}
            {/* {renderReturnBtn()} */}
            {user &&
            rendering === "myPets" &&
            pet.adoptionStatus === "Available"
              ? renderAdoptFosterButton()
              : null}
          </Card.Body>
        </div>
      </Card>
    </>
  );
};
