import { useState } from "react";
import { Container } from "react-bootstrap";

import "./search.css";

import { SearchSection } from "../../components/Search_Section/SearchSection";
import { ResultSection } from "../../components/Result_Section/ResultSection";

export const Search = () => {
  const [filteredSearch, setFilteredSearch] = useState(null);

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-evenly container-height mt-4"
      >
        <SearchSection setFilteredSearch={setFilteredSearch} />
        <ResultSection filteredSearch={filteredSearch} />
      </Container>
    </>
  );
};
