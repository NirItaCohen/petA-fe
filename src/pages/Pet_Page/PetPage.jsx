import { Badge, Card, Container, Image, ListGroup, Row } from "react-bootstrap";

import "./petPage.css";

export const PetPage = ({
  rendering,
  pet,
  user,
  badgeStatus,
  setShowPetPage,

  like,
  handleLike,
  renderReturnBtn,
  renderAdoptFosterButton,
}) => {
  return (
    <>
      <Container className="mt-3 pet-card">
        <Row md={4} xl={2} className="d-flex flex-column">
          <Image
            className="w-50 ratio ratio-16x9 rounded align-self-center my-3"
            width={160}
            height={210}
            variant="top"
            src={pet.picture}
          />
          <Card className="w-100">
            <Card.Body className="d-flex justify-content-between">
              <Card.Title>{pet.name}</Card.Title>
              <span
                className="close-sign"
                onClick={() => setShowPetPage(false)}
              >
                X
              </span>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <p className="warning-text-emphasis my-2 ">
                  Adoption Status
                  <Badge className="ms-3" bg={badgeStatus}>
                    {pet.adoptionStatus}
                  </Badge>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis my-2">
                  Breed - {pet.breed}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis my-2">
                  Height - {pet.height} cm
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis my-2">
                  Weight - {pet.weight} kg
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis my-2">
                  Hypoallergnic -
                  <Badge
                    className="ms-2"
                    bg={pet.hypoallergnic ? "primary" : "danger"}
                  >
                    {pet.hypoallergnic ? "Yes" : "No"}
                  </Badge>
                </p>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {user && rendering !== "admin" ? (
                <h2 className="like-heart" onClick={handleLike}>
                  {like ? "🧡" : "🤍"}
                </h2>
              ) : null}
            </Card.Body>
            <Card.Body>
              {user &&
              rendering === "myPets" &&
              pet.adoptionStatus !== "Available"
                ? renderReturnBtn()
                : null}
              {user &&
              rendering === "myPets" &&
              pet.adoptionStatus === "Available"
                ? renderAdoptFosterButton()
                : null}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
