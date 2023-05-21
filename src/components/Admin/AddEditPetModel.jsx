import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, FormLabel, Modal } from "react-bootstrap";
import pets from "../../data/pet-data.json";

const colorOptions = pets
  .map((pet) => pet.color)
  .map((color, index) => {
    return (
      <option value={color} key={index}>
        {color}
      </option>
    );
  });

export const AddEditPetModal = ({ modalType, showModal, pet, method }) => {
  const [isEdit, setIsEdit] = useState(modalType === "edit");
  // const stateDetails = () => {
  // const [type, setType] = useState("");
  // const [name, setName] = useState("");
  // const [adoptionStatus, setAdoptionStatus] = useState("");
  // const [picture, setPicture] = useState("");
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [color, setColor] = useState("");
  // const [bio, setBio] = useState("");
  // const [hypoallergenic, setHypoallergenic] = useState(false);
  // const [dietry, setDietry] = useState("");
  // const [breed, setBreed] = useState("");
  // const handleTypeChange = (event) => {};
  // const handleNameChange = (event) => {};
  // const handleAdoptionStatusChange = (event) => {};
  // const handlePictureChange = (event) => {};
  // const handleHeightChange = (event) => {};
  // const handleWeightChange = (event) => {};
  // const handleColorChange = (event) => {};
  // const handleBioChange = (event) => {};
  // const handleHypoallergenicChange = (event) => {};
  // const handleDietryChange = (event) => {};
  // const handleBreedChange = (event) => {};
  // }

  const [petDetails, setPetDetails] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    picture: "",
    height: "",
    weight: "",
    color: "",
    bio: "",
    hypoallergnic: false,
    dietry: "",
    breed: "",
  });
  useEffect(() => {
    if (pet !== null && modalType === "edit") {
      setPetDetails({
        id: pet._id,
        type: pet.type,
        name: pet.name,
        adoptionStatus: pet.adoptionStatus,
        picture: pet.picture,
        height: pet.height,
        weight: pet.weight,
        color: pet.color,
        bio: pet.bio,
        hypoallergnic: pet.hypoallergnic,
        dietry: petDetails.dietry,
        breed: pet.breed,
      });
    }
  }, [isEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPetDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    method(petDetails);
    showModal(false);
  };

  return (
    <>
      <Modal show={modalType} onHide={() => showModal(false)}>
        <Modal.Header>
          <Modal.Title>{modalType.toUpperCase()} PET</Modal.Title>
          <span className="close-sign" onClick={() => showModal(false)}>
            X
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <div className="mb-3 d-flex flex-column flex-start">
              <FormLabel className="align-self-start">Animal Type</FormLabel>
              <Form.Check
                onChange={handleChange}
                label="Dog"
                name="type"
                type="radio"
                value={"Dog"}
                checked={petDetails.type === "Dog"}
              />
              <Form.Check
                onChange={handleChange}
                label="Cat"
                name="type"
                type="radio"
                value={"Cat"}
                checked={petDetails.type === "Cat"}
              />
            </div>
            <Form.Group className="mb-3">
              <FloatingLabel label="Name" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  name="name"
                  value={petDetails.name}
                />
              </FloatingLabel>
            </Form.Group>
            <div className="mb-3 d-flex flex-column">
              <FormLabel className="align-self-start">
                Adoption status
              </FormLabel>
              <Form.Check
                onChange={handleChange}
                label="Adopted"
                name="adoptionStatus"
                type="radio"
                value={"Adopted"}
                checked={petDetails.adoptionStatus === "Adopted"}
              />
              <Form.Check
                onChange={handleChange}
                label="Fostered"
                name="adoptionStatus"
                type="radio"
                value={"Fostered"}
                checked={petDetails.adoptionStatus === "Fostered"}
              />
              <Form.Check
                onChange={handleChange}
                label="Avaliable"
                name="adoptionStatus"
                type="radio"
                value={"Avaliable"}
                checked={petDetails.adoptionStatus === "Avaliable"}
              />
            </div>
            <Form.Group className="mb-3">
              <FloatingLabel label="Breed" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Breed"
                  onChange={handleChange}
                  name="breed"
                  value={petDetails.breed}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Height" className="mb-2">
                <Form.Control
                  type="number"
                  placeholder="Height"
                  onChange={handleChange}
                  name="height"
                  value={petDetails.height}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Weight" className="mb-2">
                <Form.Control
                  type="number"
                  placeholder="Weight"
                  onChange={handleChange}
                  name="weight"
                  value={petDetails.weight}
                />
              </FloatingLabel>
            </Form.Group>
            <div className="mb-3 d-flex flex-column">
              <FormLabel className="align-self-start">Hypoallergenic</FormLabel>
              <Form.Check
                onChange={handleChange}
                label="Yes"
                name="hypoallergenic"
                type="radio"
                value={true}
                checked={petDetails.hypoallergnic === false}
              />
              <Form.Check
                onChange={handleChange}
                label="No"
                name="hypoallergenic"
                type="radio"
                value={false}
                checked={petDetails.hypoallergnic === true}
              />
            </div>
            <Form.Group className="mb-3">
              <FloatingLabel label="Color" className="mb-2">
                <input
                  onChange={handleChange}
                  type="text"
                  name="color"
                  className="form-control"
                  list="colorOptions"
                  placeholder="Type to search..."
                  value={pet.color}
                />
                <datalist id="colorOptions">{colorOptions}</datalist>
              </FloatingLabel>
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" type="submit">
                {modalType.toUpperCase()}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
