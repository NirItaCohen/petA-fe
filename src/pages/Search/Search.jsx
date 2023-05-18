import { createContext, useState } from "react";
import { Container } from "react-bootstrap";

import "./search.css";

import { SearchTab } from "../../components/Search_Tab/SearchTab";
import { ResultTab } from "../../components/Result_Tab/ResultTab";

export const SearchContext = createContext();

export const Search = () => {
  const [showAdvance, setShowAdvance] = useState(false);
  const [type, setType] = useState("Pet Type");
  const [serachQuery, setSerachQuery] = useState("");

  const handleChange = (event) => {
    setSerachQuery(event.value);
  };

  const handleTypeChange = (event) => {
    event.target.parentElement.classList = "dropdown-menu";
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefalt()
    const basicSearchQuery = { type, serachQuery };
    console.log(
      "Search query need function to procced to the server ",
      basicSearchQuery
    );
  };

  return (
    <>
      <SearchContext.Provider
        value={{
          handleChange,
          handleTypeChange,
          handleSubmit,
          type,
          serachQuery,
          showAdvance,
          setShowAdvance,
        }}
      >
        <Container
          fluid
          className="d-flex justify-content-evenly container-height mt-4"
        >
          <SearchTab />
          <ResultTab />
        </Container>
      </SearchContext.Provider>
    </>
  );
};
