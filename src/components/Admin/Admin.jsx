import { useState, createContext } from "react";
import { Container } from "react-bootstrap";
import "./admin.css";
import { AdminResultsTab } from "./AdminResultsTab";
import { AdminTab } from "./AdminTab";

export const AdmimContext = createContext();

export const Admin = () => {
  const [pets, setPets] = useState(null);
  const [users, setUsers] = useState(null);
  const [toggle, setToggle] = useState("pets");

  return (
    <>
      <AdmimContext.Provider
        value={{
          pets,
          setPets,
          users,
          setUsers,
          toggle,
          setToggle,
        }}
      >
        <Container
          fluid
          className="d-flex justify-content-evenly container-height"
        >
          {toggle === "pets" ? (
            <>
              <AdminTab tabType={"pet"} />
            </>
          ) : (
            <>
              <AdminTab tabType={"user"} />
            </>
          )}
          <AdminResultsTab />
        </Container>
      </AdmimContext.Provider>
    </>
  );
};
