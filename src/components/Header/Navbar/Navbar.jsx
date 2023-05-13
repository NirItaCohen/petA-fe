import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./navbar.css";

import { AppContext } from "../../../App";
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
      <Container className="bg-warning py-3 border-0" fluid>
        <NavLink to={"/"}>Home</NavLink>
        {user ? (
          <>
            <NavLink to={"/MyPets"}>{user.name} pets</NavLink>
            <button onClick={handleLoginModal}>Log out</button>
            <button onClick={handleSearchModal}>Search</button>
            <ProfileSettings />
          </>
        ) : (
          <>
            <button variant="outline-danger" onClick={handleLoginModal}>
              Login
            </button>
            <button onClick={handleSignUpModal}>Sign Up</button>
          </>
        )}
        {showModal && (
          <NavbarModal loginStat={loginStat} showModal={setShowModal} />
        )}
      </Container>
    </>
  );
};

// <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>;
