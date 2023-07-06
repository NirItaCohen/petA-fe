import React from "react";
import { PageItem, Pagination } from "react-bootstrap";

function PetsPagination({
  totalPets,
  petsPerPage,
  setCurrentPage,
  currentPage,
}) {
  const pages = [];
  for (let i = 1; i < Math.ceil(totalPets / petsPerPage); i++) {
    pages.push(
      <Pagination.Item className="btn mx-0" key={i} style={{ margin: 0, padding: 0 }}>
        {i}
      </Pagination.Item>
    );
  }

  const handlePageClick = (event) => {
    const num = event.target.innerText;
    setCurrentPage(3);
  };
  return (
    <div>
      <Pagination onClick={(event) => handlePageClick(event)}>
        {pages}
      </Pagination>
    </div>
  );
}

export default PetsPagination;
