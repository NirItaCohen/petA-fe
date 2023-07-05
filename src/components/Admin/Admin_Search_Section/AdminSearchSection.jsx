/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { AdmimContext } from "../Admin";
import "./adminSearchSection.css";

export const AdminSearchSection = ({ tabType }) => {
  const { toggle, setToggle, openAddModal, showAll } = useContext(AdmimContext);

  const upperFirstTabChar = () => {
    return tabType
      .split("")[0]
      .toUpperCase()
      .concat(tabType.slice(1, tabType.length));
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
      <div className=" w-25 d-flex flex-column align-items-center admin-section">
        <Nav variant="tabs" className="box  w-100" defaultActiveKey={"#"}>
          <Nav.Item>
            <a
              onClick={(event) => toggleView(event)}
              name="pets"
              href={toggle === "pets" ? "#" : undefined}
              className={toggle === "users" ? "second " : "primary"}
            >
              Pets
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              onClick={(event) => toggleView(event)}
              name="users"
              href={toggle === "users" ? "#" : undefined}
              className={toggle === "pets" ? "second" : "primary"}
            >
              Users
            </a>
          </Nav.Item>
        </Nav>

        <div className="d-flex flex-column">
          {
            <>
              <Button
                onClick={() => showAll(tabType)}
                className="shadow m-4"
                variant={"warning"}
              >
                Show {upperFirstTabChar()}s
              </Button>
              {tabType === "pet" && (
                <Button
                  onClick={openAddModal}
                  className="shadow m-4"
                  variant={"warning"}
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
