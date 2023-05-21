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
                onClick={() => showAll(tabType)}
                className="m-4"
                variant={"outline-primary"}
              >
                Show {upperFirstTabChar()}s
              </Button>
              {tabType === "pet" && (
                <Button
                  onClick={openAddModal}
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
