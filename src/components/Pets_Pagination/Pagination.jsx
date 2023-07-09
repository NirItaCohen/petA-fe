import React from "react";
import { Button } from "react-bootstrap";

function PetsPagination({
  handleNextPage,
  handlePrevPage,
  currentPage,
  pets,
  petsPerPage,
}) {
  return (
    <ul className="pagination">
      <li className="page-item">
        <Button
          className="page-link"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(pets?.length / petsPerPage)}
        >
          Next Page
        </Button>
      </li>
      <li className="page-item">
        <Button
          className="page-link"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
      </li>
    </ul>
  );
}

export default PetsPagination;
