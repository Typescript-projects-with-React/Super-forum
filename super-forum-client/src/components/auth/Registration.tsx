import React, { FC, useReducer } from "react";

import ReactModal from "react-modal";
import ModalProps from "../types/ModalProps";
import "./Registration.css";
import userReducer from "./common/UserReducer";
import { allowSubmit } from "./common/Helpers";
import PasswordComparison from "./common/PasswordComparison";

const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [
    { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer(userReducer, {
    userName: "davec",
    password: "",
    email: "admin@dzhaven.com",
    passwordConfirm: "",
    resultMsg: "",
    isSubmitDisabled: true,
  });

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "userName" });
    if (!e.target.value) {
      allowSubmit(dispatch, "Username can not be empty", true);
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "email" });
    if (!e.target.value) allowSubmit(dispatch, "Email cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };



  const onClickRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };
  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      className="modal-menu"
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="req-inputs">
          <div>
            <label>username</label>
            <input type="text" value={userName} onChange={onChangeUserName} />
          </div>
          <div>
            <label>email</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
         <PasswordComparison passwordConfirm={passwordConfirm} password={password} dispatch={dispatch}/>
        </div>
        <div className="reg-buttons">
          <div className="reg-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={isSubmitDisabled}
              onClick={onClickRegister}
            >
              Register
            </button>
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>
          <span className="reg-btn-right">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Registration;
