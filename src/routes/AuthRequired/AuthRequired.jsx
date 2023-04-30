import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const AuthRequired = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if(loading){
    return  <Spinner className="text-center mx-auto" animation="grow" variant="danger" />
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} replace to="/login"></Navigate>;
};

export default AuthRequired;
