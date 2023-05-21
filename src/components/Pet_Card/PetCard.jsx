import { Button, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./petCard.css";

export const PetCard = ({
  adminResults,
  pet,
  openEditModal,
  deleteInstance,
}) => {
  return (
    <>
      <Card className="w-75 my-3">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="d-2">{pet.name}</Card.Title>
          <div className="d-flex w-100 ">
            <div className="d-flex align-items-start flex-column w-50">
              <span className="pet-details">Pet type: {pet.type}</span>
              <span className="pet-details">
                Adoption status: {pet.adoptionStatus}
              </span>
              <span className="pet-details">Breed: {pet.breed}</span>
            </div>
            <Card.Img className="w-50" variant="top" src="holder.js/100px180" />
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
        </div>
      </Card>
    </>
  );
};
