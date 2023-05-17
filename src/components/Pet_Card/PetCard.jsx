import { Button, Card } from "react-bootstrap";

export const PetCard = ({ adminResults, pet }) => {
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
        <div className="d-flex justify-content-end m-1">
          <Button className="m-2">Go to {pet.name}'s page</Button>
          <Button className="m-2" variant="warning">
            Edit
          </Button>
          <Button className="m-2" variant="danger">
            Delete
          </Button>
        </div>
      </Card>
    </>
  );
};
