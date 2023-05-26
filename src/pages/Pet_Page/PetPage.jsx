import { Badge, Card, Container, Image, ListGroup, Row } from "react-bootstrap";

import "./petPage.css";

export const PetPage = ({
  pet,
  user,
  badgeStatus,
  setShowPetPage,
  deleteInstance,
  like,
  handleLike,
  renderReturnBtn,
  renderAdoptFosterButton,
}) => {
  return (
    <>
      <Container className="mt-3">
        <Row md={4} xl={2} className="d-flex flex-column">
          <Image
            className="w-50 ratio ratio-16x9 rounded align-self-center mb-2"
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
                <p className="warning-text-emphasis">
                  Adoption Status -
                  <Badge className="ms-2" bg={badgeStatus}>
                    {pet.adoptionStatus}
                  </Badge>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">Breed - {pet.breed}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Height - {pet.height} cm
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Weight - {pet.weight} kg
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Hypoallergnic -
                  <Badge
                    className="ms-2"
                    bg={pet.hypoallergnic ? "success" : "warning"}
                  >
                    {pet.hypoallergnic ? "Yes" : "No"}
                  </Badge>
                </p>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex">
              <h2 className="like-heart" onClick={handleLike}>
                {like ? "🧡" : "🤍"}
              </h2>
              {user ? renderAdoptFosterButton() : null}
              {user ? renderReturnBtn() : null}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
