import { useState } from "react";
import { Container } from "react-bootstrap";

import "./search.css";

import { SearchSection } from "../../components/Search_Section/SearchSection";
import { SearchResultSection } from "../../components/Search_Result_Section/SearchResultSection";

export const Search = () => {
  const [filteredSearch, setFilteredSearch] = useState(null);

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-evenly container-height mt-4"
      >
        <SearchSection setFilteredSearch={setFilteredSearch} />
        <SearchResultSection filteredSearch={filteredSearch} />
      </Container>
    </>
  );
};
