import { useState } from "react";
import { Badge, Card, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./pet.css";

export const Pet = () => {
  
  const [like, setLike] = useState(false);
  const { pet } = useParams();
  const petObj = JSON.parse(decodeURIComponent(pet));

  const badgeStatus =
    petObj.adoptionStatus === "Adopted"
      ? "success"
      : petObj.adoptionStatus === "Fostered"
      ? "info"
      : "primary";

  const handleLike = () => {
    setLike((prevLike) => !prevLike);
  };
  return (
    <>
      <Container className="mt-3">
        <Row md={4} xl={2}>
          <Image src="" rounded />
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{petObj.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Adoption Status -
                  <Badge className="ms-2" bg={badgeStatus}>
                    {petObj.adoptionStatus}
                  </Badge>
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">Breed - {petObj.breed}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Height - {petObj.height} cm
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Weight - {petObj.weight} kg
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="warning-text-emphasis">
                  Hypoallergnic -
                  <Badge
                    className="ms-2"
                    bg={petObj.hypoallergnic ? "success" : "warning"}
                  >
                    {petObj.hypoallergnic ? "Yes" : "No"}
                  </Badge>
                </p>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <h2 className="like-heart" onClick={handleLike}>
                {like ? "🧡" : "🤍"}
              </h2>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    </>
  );
};
