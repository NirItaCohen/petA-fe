import { useState } from "react";
import {
  Button,
  DropdownButton,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import "./searchBar.css";
import { AdvanceSearch } from "./Advance_search/AdvanceSearch";

export const SearchBar = ({ showModal }) => {
  const [showAdvance, setShowAdvance] = useState(false);
  const [type, setType] = useState("Pet Type");
  const [serachQuery, setSerachQuery] = useState("");

  const handleClose = () => {
    showModal(false);
  };

  const handleChange = (event) => {
    setSerachQuery(event.value);
  };

  const handleTypeChange = (event) => {
    event.target.parentElement.classList = "dropdown-menu";
    setType(event.target.value);
  };

  const handleShowAdvanceSearch = () => {};

  const handleSubmit = () => {
    const basicSearchQuery = { type, serachQuery };
    console.log(
      "Search query need function to procced to the server ",
      basicSearchQuery
    );
  };

  return (
    <>
      <Modal.Body>
        {showAdvance ? (
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title={type}
                id="input-group-dropdown-1"
              >
                <option value="Dog" onClick={handleTypeChange}>
                  Dog
                </option>
                <option value="Cat" onClick={handleTypeChange}>
                  Cat
                </option>
                <option value="Sheep" onClick={handleTypeChange}>
                  Sheep
                </option>
              </DropdownButton>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="search"
                value={serachQuery}
              />
            </InputGroup>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        ) : (
          <AdvanceSearch />
        )}
        <Button onClick={handleShowAdvanceSearch}>Advanced Search</Button>
      </Modal.Body>
    </>
  );
};
