import React from "react";
import { NavLink } from "react-router-dom";

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {message}
      <NavLink
        className="btn-close"
        to="/"
        role="button"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
      </NavLink>
    </div>
  );
};
export default Alert;
