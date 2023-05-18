import { useEffect, useState, useContext } from "react";

import { Button, Nav } from "react-bootstrap";

import { AdmimContext } from "../Admin";
import { getAllPets } from "../../../utils/DB/Pets/petsCrud";
import { getAllUsers } from "../../../utils/DB/Users/usersCrud";

import "../Admin_Tab/adminTab.css";

export const AdminTab = ({ tabType }) => {
  const { setPets, setUsers, toggle, setToggle, addInstance } =
    useContext(AdmimContext);
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
      return;
    }
    if (tabType === "user") {
      setToggle("users");
      const data = await getAllUsers();
      setFetchedUsers(data.data.data.users);
      return;
    }
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
              <Button
                onClick={showAll}
                className="m-4"
                variant={"outline-primary"}
              >
                Show {upperFirstTabChar()}s
              </Button>
              {tabType === "pet" && (
                <Button
                  onClick={addInstance}
                  className="m-4"
                  variant={"outline-primary"}
                >
                  Add {upperFirstTabChar()}
                </Button>
              )}
            </>
          }
        </div>
      </div>
    </>
  );
};
