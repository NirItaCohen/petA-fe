import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../../App";

import "./welcomeDiv.css";

export const WelcomeDiv = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="welcome">
      {user ? (
        <Container className="mt-5">
          <h1 className="mb-3">Welcome {user.firstName}</h1>
          <p>
            Welcome back, {user.firstName}! We're thrilled to have you continue
            your pet adoption journey with us. Get ready to find your perfect
            furry companion and experience the joy they bring. Let's make more
            unforgettable memories together. Welcome back to a world of wagging
            tails and endless love!
          </p>
        </Container>
      ) : (
        <Container className="mt-5">
          <h1 className="mb-3"> Welcome to Let Animals Live! </h1>
          <p>
            Welcome to our pet adoption app, brought to you by LAL! Discover
            your perfect furry companion and make a difference in their lives.
            Join our community of animal lovers and find your match today.
            Welcome to a world where love and companionship know no bounds!
          </p>
        </Container>
      )}
    </div>
  );
};
