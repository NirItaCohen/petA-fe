import { useContext } from "react";
import {
  Button,
  Col,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { SearchContext } from "../../pages/Search/Search";
import { AdvanceSearch } from "../Advance_search/AdvanceSearch";

export const SearchTab = () => {
  const {
    handleChange,
    handleTypeChange,
    handleSubmit,
    type,
    serachQuery,
    showAdvance,
    setShowAdvance,
  } = useContext(SearchContext);

  return (
    <>
      <div className="border w-25 d-flex flex-column align-items-center p-4">
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2} className="w-50 mb-2">
                Pet Type
              </Form.Label>
              <Col sm={10} className="w-75">
                <Form.Check
                  label="Dog"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  label="Cat"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  label="Other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          {showAdvance && <AdvanceSearch />}
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <Button
          variant="outline-warning"
          onClick={() => setShowAdvance(!showAdvance)}
          className="align-self-end"
        >
          {showAdvance ? "Basic Search  " : "Advanced Search"}
        </Button>
      </div>
    </>
  );
};
