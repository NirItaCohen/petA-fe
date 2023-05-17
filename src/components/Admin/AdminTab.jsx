import { useEffect, useState, useContext } from "react";

import { Button, Nav } from "react-bootstrap";

import { SignUp } from "../Navbar/Sign_Up/SignUp";
import { AddPet } from "./AddPet";
import { AdmimContext } from "./Admin";
import getAllPets from "../../utils/DB_Funcrions//Pets/petsCrud";
import getAllUsers from "../../utils/DB_Funcrions/Users/usersCrud";

import "./adminTab.css";
export const AdminTab = ({ tabType }) => {
  // const [showCommand, setShowCommand] = useState("");

  const { setPets, setUsers, toggle, setToggle } = useContext(AdmimContext);
  const [fetchedPets, setFetchedPets] = useState(null);
  const [fetchedUsers, setFetchedUsers] = useState(null);

  useEffect(() => {
    if (fetchedPets == null) {
      return undefined;
    }
    if (!Array.isArray(fetchedPets)) {
      return undefined;
    }
    setPets(fetchedPets);
  }, [fetchedPets]);

  useEffect(() => {
    if (fetchedUsers == null) {
      return undefined;
    }
    if (!Array.isArray(fetchedUsers)) {
      return undefined;
    }
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  const upperFirstTabChar = () => {
    return tabType
      .split("")[0]
      .toUpperCase()
      .concat(tabType.slice(1, tabType.length));
  };

  const showAll = async () => {
    if (tabType === "pet") {
      setToggle("pets");
      const data = await getAllPets();
      setFetchedPets(data.data.data.pets);
    } else {
      setToggle("users");
      const data = await getAllUsers();
      setFetchedUsers(data.data.data.users);
    }
  };

  const addInstance = () => {
    // setShowCommand("add");
    return tabType === "pet" ? (
      <>
        <h3>Add pet</h3>
      </>
    ) : (
      <h3>Add user</h3>
    );
  };

  const toggleView = (event) => {
    if (event.target.name === "pets" && toggle === "pets") {
      return;
    }
    if (event.target.name === "users" && toggle === "users") {
      return;
    }
    toggle === "pets" ? setToggle("users") : setToggle("pets");
  };

  return (
    <>
      <div className="border w-25 d-flex flex-column align-items-center">
        <Nav variant="tabs" className="mt-2 h4 w-100" defaultActiveKey={"#"}>
          <Nav.Item>
            <Nav.Link
              onClick={(event) => toggleView(event)}
              name="pets"
              href={toggle === "pets" && "#"}
              className={toggle === "users" ? "text-secondary" : "text-primary"}
            >
              Pets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={(event) => toggleView(event)}
              name="users"
              href={toggle === "users" && "#"}
              className={toggle === "pets" ? "text-secondary" : "text-primary"}
            >
              Users
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="d-flex flex-column">
          {
            <>
              <Button onClick={showAll} className="m-4">
                Show {upperFirstTabChar()}
              </Button>

              <Button onClick={addInstance} className="m-4">
                Add {upperFirstTabChar()}
              </Button>
            </>
          }
        </div>
      </div>
    </>
  );
};
