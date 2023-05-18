import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./navbar.css";

import { AppContext } from "../../App";
import { NavbarModal } from "./Navbar_Modal/NavbarModal";
import { ProfileSettings } from "./Profile_Settings/ProfileSettings";

export const Navbar = () => {
  const { user } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [loginStat, setLoginStat] = useState("");

  const handleLoginModal = () => {
    setShowModal(true);
    setLoginStat("login");
  };
  const handleSignUpModal = () => {
    setShowModal(true);
    setLoginStat("signUp");
  };

  const handleSearchModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Container
        className="bg-warning py-3 border-0 d-flex justify-content-between align-items-center"
        fluid
      >
        <NavLink className={"display-6"} to={"/"}>
          Home
        </NavLink>
        <div>
          <NavLink className={"me-3"} to={"/search"}>
            Search
          </NavLink>
          {user ? (
            <>
              <NavLink to={"/MyPets"}>{user.name} pets</NavLink>
              <button
                onClick={handleLoginModal}
                className="btn btn-outline-light mx-2"
              >
                Log out
              </button>
              <button
                onClick={handleSearchModal}
                className="btn btn-outline-light mx-2"
              >
                Search
              </button>
              <ProfileSettings />
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light mx-2"
                onClick={handleLoginModal}
              >
                Login
              </button>
              <button
                onClick={handleSignUpModal}
                className="btn btn-outline-light mx-2"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {showModal && (
          <NavbarModal loginStat={loginStat} showModal={setShowModal} />
        )}
      </Container>
    </>
  );
};
