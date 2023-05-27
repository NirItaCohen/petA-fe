import { Button, Card } from "react-bootstrap";

export const UserCard = ({
  rendering,
  user,
  openEditModal,
  deleteInstance,
}) => {
  return (
    <>
      <Card className="w-100 my-3">
        {rendering !== "admin" && (
          <Card.Img variant="top" src="holder.js/100px180" />
        )}
        <Card.Body>
          <Card.Title className="d-2">{user.name}</Card.Title>
          <div className="d-flex align-items-start flex-column">
            <span className="user-details">
              Role: {user.role.includes("user") ? "Regular user" : "Admin"}
            </span>
            {user.role !== "admin" && (
              <span className="user-details">User pets: {user.pets}</span>
            )}
          </div>
        </Card.Body>
        <div className="d-flex justify-content-end m-1">
          <Button
            className="m-2"
            variant="outline-warning"
            onClick={() => openEditModal("user", user)}
          >
            Edit
          </Button>
          <Button
            className="m-2"
            variant="outline-danger"
            onClick={() => deleteInstance("user", user._id)}
          >
            Delete
          </Button>
        </div>
      </Card>
    </>
  );
};
