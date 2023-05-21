import { useState } from "react";
import { Button, FloatingLabel, Form, FormLabel, Modal } from "react-bootstrap";

export const EditUserModal = ({ user, showModal, method }) => {
  const [userDetails, setUserDetails] = useState({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role, // enum
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    method(userDetails);
    showModal(false);
  };
  return (
    <>
      <Modal show={user} onHide={() => showModal(false)}>
        <Modal.Header>
          <Modal.Title>Edit {user.name.toUpperCase()}</Modal.Title>
          <span className="close-sign" onClick={() => showModal(false)}>
            X
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <div className="mb-3 d-flex flex-column flex-start">
              <FormLabel className="align-self-start">Role</FormLabel>
              <Form.Check
                onChange={handleChange}
                label="Regular user"
                name="role"
                type="radio"
                value={"regularUser"}
                checked={userDetails.role === "regularUser"}
              />
              <Form.Check
                onChange={handleChange}
                label="Admin"
                name="type"
                type="radio"
                value={"admin"}
                checked={userDetails.role === "admin"}
              />
            </div>
            <Form.Group className="mb-3">
              <FloatingLabel label="First Name" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  name="firstName"
                  value={userDetails.firstName}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Last Name" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  name="lastName"
                  value={userDetails.lastName}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Email" className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={userDetails.email}
                />
              </FloatingLabel>
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" type="submit">
                Edit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
