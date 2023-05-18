import { Button, Col, Form, Row } from "react-bootstrap";

export const AdvanceSearch = () => {
  return (
    <>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2} className="w-50 mb-2">
            Adoption Status
          </Form.Label>
          <Col sm={10} className="w-75  ">
            <Form.Check
              label="Adopted"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              label="Fostered"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              label="Abaliable"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column xl={6}>
          Height (cm)
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Height" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column xl={6}>
          Weight (kg)
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Weight" />
        </Col>
      </Form.Group>
    </>
  );
};
