import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../../../App";

export const WelcomeDiv = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      {user ? (
        <>
          <Container>
            <h1>Welcome {user.name}</h1>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <h1>Welcome guest</h1>
          </Container>
        </>
      )}
    </div>
  );
};
