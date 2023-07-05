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
      <div className=" w-25 d-flex flex-column align-items-center">
        <Nav variant="tabs" className="box  w-100" defaultActiveKey={"#"}>
          <Nav.Item>
            <a
              onClick={(event) => toggleView(event)}
              name="pets"
              href={toggle === "pets" && "#"}
              className={toggle === "users" ? "second " : "primary"}
            >
              Pets
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              onClick={(event) => toggleView(event)}
              name="users"
              href={toggle === "users" && "#"}
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
                className="m-4"
                variant={"outline-warning"}
              >
                Show {upperFirstTabChar()}s
              </Button>
              {tabType === "pet" && (
                <Button
                  onClick={openAddModal}
                  className="m-4"
                  variant={"outline-warning"}
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
