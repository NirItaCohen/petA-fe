import { Button, Card } from "react-bootstrap";

export const UserCard = ({ adminResults, user }) => {
  return (
    <>
      <Card className="w-100 my-3">
        {adminResults === false && (
          <Card.Img variant="top" src="holder.js/100px180" />
        )}
        <Card.Body>
          <Card.Title className="d-2">{user.name}</Card.Title>
          <div className="d-flex align-items-start flex-column">
            <span className="user-details">user type: {user.type}</span>
            <span className="user-details">
              Adoptions status: {user.adoptionStatus}
            </span>
            <span className="user-details">Breed: {user.breed}</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
