import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";

import { searchFilter } from "../../pages/Search/searchFilter";

const PET_TYPES = ["cat", "dog", "other"];
const ADOPTION_STATUS = ["adopted", "fostered", "available"];

export const SearchSection = ({ setFilteredSearch }) => {
  const [showAdvance, setShowAdvance] = useState(false);
  const [petType, setPetType] = useState([]);
  const [status, setStatus] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightEquality, setHeightEquality] = useState("equal");
  const [weightEquality, setWeightEquality] = useState("equal");

  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    setPetType([]);
    setStatus([]);
    setHeight("");
    setWeight("");
    setHeightEquality("equal");
    setWeightEquality("equal");
  }, [isSubmited]);

  const isTypeChecked = (type) => {
    return petType.includes(type);
  };
  const isStatusChecked = (type) => {
    return status.includes(type);
  };

  const handlePetSelection = (type) => {
    const newTypes = Array.from(new Set([petType, type])).flat();
    setPetType(newTypes);
  };
  const handleStatudSelection = (stat) => {
    const newStatus = Array.from(new Set([status, stat])).flat();
    setStatus(newStatus);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleShowAdvanceChange = () => {
    setStatus([]);
    setHeight("");
    setWeight("");
    setShowAdvance(!showAdvance);
  };

  const handleHeightEqualityChange = (event) => {
    setHeightEquality(event.target.value);
  };
  const handleWeightEqualityChange = (event) => {
    setWeightEquality(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchObject = {
      petType,
      status,
      height,
      weight,
      heightEquality,
      weightEquality,
      showAdvance,
    };
    setIsSubmited(!isSubmited);
    setFilteredSearch(searchFilter(searchObject));
  };

  const show = () => {
    console.log(
      petType,
      status,
      height,
      weight,
      heightEquality,
      weightEquality
    );
  };

  return (
    <div className=" w-25 d-flex flex-column align-items-center p-4">
      {/* <button onClick={show}>Show</button> */}
      <Form onSubmit={handleSubmit} className="mb-3 w-100">
        <Form.Label as="legend" column sm={2} className="w-50 mb-2">
          Pet Type
        </Form.Label>
        {PET_TYPES.map((pet, index) => {
          return (
            <Form.Group key={index}>
              <Form.Check
                checked={isTypeChecked(pet)}
                label={pet.toUpperCase()}
                name={pet}
                id={pet}
                value={isTypeChecked(pet)}
                onChange={() => handlePetSelection(pet)}
              />
            </Form.Group>
          );
        })}
        <Form.Label as="legend" column sm={2} className="w-75 mb-2">
          Advance Search
        </Form.Label>
        <Form.Group className="mb-4">
          <Form.Check
            type="switch"
            name="showAdvance"
            id="showAdvance"
            value={showAdvance}
            onChange={handleShowAdvanceChange}
          />
        </Form.Group>
        {showAdvance === true ? (
          <>
            <Form.Label as="legend" column sm={2} className="w-50 mb-2">
              Pet Status
            </Form.Label>
            {ADOPTION_STATUS.map((status, index) => {
              return (
                <Form.Group key={index}>
                  <Form.Check
                    checked={isStatusChecked(status)}
                    label={status.toUpperCase()}
                    name={status}
                    id={status}
                    value={isStatusChecked(status)}
                    onChange={() => handleStatudSelection(status)}
                  />
                </Form.Group>
              );
            })}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column xl={6}>
                Height (cm)
              </Form.Label>
              <InputGroup className="mb-3">
                <FloatingLabel label="Equality">
                  <Form.Select onChange={handleHeightEqualityChange}>
                    <option value="equal">Equal</option>
                    <option value="higher">Higher</option>
                    <option value="smaller">Smaller</option>
                  </Form.Select>
                </FloatingLabel>
                <Form.Control
                  onChange={handleHeightChange}
                  type="number"
                  placeholder="Height"
                  min={0}
                  name="height"
                  value={height}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column xl={6}>
                Weight (kg)
              </Form.Label>

              <InputGroup className="mb-3">
                <FloatingLabel label="Equality">
                  <Form.Select onChange={handleWeightEqualityChange}>
                    <option value="equal">Equal</option>
                    <option value="higher">Higher</option>
                    <option value="smaller">Smaller</option>
                  </Form.Select>
                </FloatingLabel>
                <Form.Control
                  onChange={handleWeightChange}
                  type="number"
                  placeholder="Weight"
                  min={0}
                  name="weight"
                  value={weight}
                />
              </InputGroup>
            </Form.Group>
          </>
        ) : null}
        <Button type="submit" variant="warning">
          Search
        </Button>
      </Form>
    </div>
  );
};
