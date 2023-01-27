import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

const RequiredAuth = () => {
  const [{ auth }] = AuthConsumer();
  const location = useLocation();
  return auth ? (
    <></>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  );
};

export default RequiredAuth;
