import { useState, createContext } from "react";
import { Container } from "react-bootstrap";
import "./admin.css";
import { AdminResultsTab } from "./Admin_Results_Tab/AdminResultsTab";
import { AdminTab } from "./Admin_Tab/AdminTab";
import { addPet, editPet, deletePet } from "../../utils/DB/Pets/petsCrud";
import { editUser, deleteUser } from "../../utils/DB/Users/usersCrud";

export const AdmimContext = createContext();

export const Admin = () => {
  const [pets, setPets] = useState(null);
  const [users, setUsers] = useState(null);
  const [toggle, setToggle] = useState("pets");

  const addInstance = (instanceType, instanceData) => {};

  const editInstance = (instanceType, instanceData) => {};

  const deleteInstance = (instanceType, instanceID) => {

    instanceType === "pet" ? deletePet(instanceID) : deleteUser(instanceID);
  };

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
          addInstance,
          editInstance,
          deleteInstance,
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
