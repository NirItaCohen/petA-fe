import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AdmimContext } from "../Admin/Admin";

export const PetCard = ({ adminResults, pet }) => {
  const { editInstance, deleteInstance } = useContext(AdmimContext);
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
        <div className="d-flex m-1 justify-content-between">
          <Button className="m-2" variant="outline-primary">
            {pet.name}'s page
          </Button>
          <div>
            <Button
              className="m-2"
              variant="outline-warning"
              onClick={() => editInstance("pet", pet)}
            >
              Edit
            </Button>
            <Button
              className="m-2"
              variant="outline-danger"
              onClick={() => deleteInstance("user", pet._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};
