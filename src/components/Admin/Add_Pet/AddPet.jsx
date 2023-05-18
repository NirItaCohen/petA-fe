import { useState } from "react";
import { Button, FloatingLabel, Form, FormLabel, Modal } from "react-bootstrap";
import "./addPet.css";

import pets from "../../data/pet-data.json";

export const AddPet = ({ showModal }) => {
  const [petDetails, setPetDetails] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    picture: "",
    height: "",
    weight: "",
    color: "",
    bio: "",  
    hypoallergenic: false,
    dietry: "",
    breed: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPetDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    showModal(false);
  };

  const checkPasswords = () => {
    return petDetails.password === petDetails.confirmPassword;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (checkPasswords()) {
      console.log("procceiding to server");
      handleClose();
    } else {
      console.log("Passwords do not match");
    }
  };

  const colorOptions = pets
    .map((pet) => pet.color)
    .map((color) => {
      return <option value={color}>{color}</option>;
    });

  return (
    <div className="m-2">
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="mb-3 d-flex flex-column flex-start">
            <FormLabel className="align-self-start">Animal Type</FormLabel>
            <Form.Check
              className="d-flex"
              label="Dog"
              name="petType"
              type="radio"
              value={petDetails.type}
            />
            <Form.Check
              className="d-flex"
              label="Cat"
              name="petType"
              type="radio"
              value={petDetails.type}
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
                autoFocus
              />
            </FloatingLabel>
          </Form.Group>
          <div className="mb-3 d-flex flex-column">
            <FormLabel className="align-self-start">Adoption status</FormLabel>
            <Form.Check
              className="d-flex"
              label="Adopted"
              name="adoptionStatus"
              type="radio"
              value={petDetails.adoptionStatus}
            />
            <Form.Check
              className="d-flex"
              label="Fostered"
              name="adoptionStatus"
              type="radio"
              value={petDetails.adoptionStatus}
            />
            <Form.Check
              className="d-flex"
              label="Avaliable"
              name="adoptionStatus"
              type="radio"
              value={petDetails.adoptionStatus}
            />
          </div>
          <Form.Group className="mb-3">
            <FloatingLabel label="Height" className="mb-2">
              <Form.Control
                type="number"
                placeholder="Height"
                onChange={handleChange}
                name="height"
                value={petDetails.height}
                autoFocus
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Whight" className="mb-2">
              <Form.Control
                type="number"
                placeholder="Whight"
                onChange={handleChange}
                name="whight"
                value={petDetails.weight}
                autoFocus
              />
            </FloatingLabel>
          </Form.Group>
          <div className="mb-3 d-flex flex-column">
            <FormLabel className="align-self-start">Hypoallergenic</FormLabel>
            <Form.Check
              className="d-flex"
              label="Yes"
              name="hypoallergenic"
              type="radio"
              value={true}
            />
            <Form.Check
              className="d-flex"
              label="No"
              name="hypoallergenic"
              type="radio"
              value={false}
            />
          </div>
          <Form.Group className="mb-3">
            <FloatingLabel label="Color" className="mb-2">
              <input
                className="form-control"
                list="colorOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
              <datalist id="colorOptions">{colorOptions}</datalist>
            </FloatingLabel>
          </Form.Group>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </div>
  );
};
