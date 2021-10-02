import React, { useEffect, useState } from "react";
import {Link} from"react-router-dom"
import { AppState } from "../../../store/AppState";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./SideBarMenus.css";

import { UserProfileReducer } from "../../../store/user/Reducer";
import Registration from "../../auth/Registration";
import Login from "../../auth/Login";
import Logout from "../../auth/Logout";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout);
  };



  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">
            <Link to={`/userprofile/${user?.id}`}>{user?.userName}</Link>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span className="menu-name" onClick={onClickToggleRegister}>
            register
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-name">
            login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-name">
            logout
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul>
    </>
  );
};

export default SideBarMenus;
