import { useState, createContext } from "react";
import { Container } from "react-bootstrap";
import "./admin.css";
import { AdminResultsSection } from "./Admin_Results_Section/AdminResultsSection";
import { AdminSearchSection } from "./Admin_Search_Section/AdminSearchSection";
import { addPet, editPet, deletePet } from "../../utils/DB/Pets/petsCrud";
import { editUser, deleteUser } from "../../utils/DB/Users/usersCrud";
import { AddEditPetModal } from "./AddEditPetModel";
import { EditUserModal } from "./EditUserModal";
import { getAllPets } from "../../utils/DB/Pets/petsCrud";
import { getAllUsers } from "../../utils/DB/Users/usersCrud";

export const AdmimContext = createContext();

export const Admin = () => {
  const [pets, setPets] = useState(null);
  const [users, setUsers] = useState(null);
  const [showAddEditPetModal, setShowAddEditPetModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [toggle, setToggle] = useState("pets");
  const [modalType, setModalType] = useState("");
  const [instanceData, setInstanceData] = useState(null);

  const showAll = async (tabType) => {
    if (tabType === "pet") {
      setToggle("pets");
      const data = await getAllPets();
      setPets(data.data.data.pets);
      return;
    }
    if (tabType === "user") {
      setToggle("users");
      const data = await getAllUsers();
      setUsers(data.data.data.users);
      return;
    }
  };

  const openAddModal = (instanceType, instanceData) => {
    setModalType("add");
    setShowAddEditPetModal(true);
  };

  const addPetInstance = async (pet) => {
    await addPet(pet);
    showAll("pet");
  };

  const openEditModal = (instanceType, instanceData) => {
    setInstanceData(instanceData);
    if (instanceType === "user") {
      setShowEditUserModal(true);
    } else {
      setModalType("edit");
      setShowAddEditPetModal(true);
    }
  };

  const editInstance = async (instance) => {
    if (instance.email) {
      await editUser(instance.id, instance);
      showAll("user");
      return;
    } else {
      await editPet(instance.id, instance);
      showAll("pet");
      return;
    }
  };

  const deleteInstance = async (instanceType, instanceID) => {
    instanceType === "pet"
      ? await deletePet(instanceID)
      : await deleteUser(instanceID);
    showAll(instanceType);
  };

  return (
    <>
      <AdmimContext.Provider
        value={{
          showAll,
          pets,
          setPets,
          users,
          setUsers,
          toggle,
          setToggle,
          openAddModal,
          openEditModal,
          deleteInstance,
        }}
      >
        <Container
          fluid
          className="d-flex justify-content-evenly container-height mt-5"
        >
          {toggle === "pets" ? (
            <>
              <AdminSearchSection tabType={"pet"} />
            </>
          ) : (
            <>
              <AdminSearchSection tabType={"user"} />
            </>
          )}
          {showAddEditPetModal === true ? (
            <AddEditPetModal
              showModal={setShowAddEditPetModal}
              modalType={modalType}
              pet={instanceData}
              method={modalType === "edit" ? editInstance : addPetInstance}
            />
          ) : null}
          {showEditUserModal === true ? (
            <EditUserModal
              showModal={setShowEditUserModal}
              user={instanceData}
              method={editInstance}
            />
          ) : null}
          <AdminResultsSection />
        </Container>
      </AdmimContext.Provider>
    </>
  );
};
