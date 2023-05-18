import { Modal } from "react-bootstrap";

import "./NavbarModal.css";

import { Login } from "../Login/Login";
import { SignUp } from "../Sign_Up/SignUp";

export const NavbarModal = ({ loginStat, showModal }) => {
  const headLineTitle = loginStat ? loginStat : "Search";

  return (
    <>
      <Modal show={loginStat != null} onHide={() => showModal(false)}>
        <Modal.Header>
          <Modal.Title>{headLineTitle.toUpperCase()}</Modal.Title>
          <span className="close-sign" onClick={() => showModal(false)}>
            X
          </span>
        </Modal.Header>
        {loginStat === "login" ? (
          <Login showModal={showModal} />
        ) : (
          <SignUp showModal={showModal} />
        )}
      </Modal>
    </>
  );
};
