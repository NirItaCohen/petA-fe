import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "./search.css";

import { SearchSection } from "../../components/Search_Section/SearchSection";
import { SearchResultSection } from "../../components/Search_Result_Section/SearchResultSection";
import { AppContext } from "../../App";
import { getUser } from "../../utils/DB/Users/usersCrud";

export const Search = () => {
  const [filteredSearch, setFilteredSearch] = useState(null);
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const getCurrentUser = async () => {
      if (user !== null) {
        const userData = await getUser(user._id);
        setUser(userData.data.data.user);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-evenly container-height mt-4"
      >
        <SearchSection setFilteredSearch={setFilteredSearch} />
        <SearchResultSection filteredSearch={filteredSearch} user={user} />
      </Container>
    </>
  );
};
