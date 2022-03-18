import React from "react";
import { Link } from "react-router-dom";
import "./Component271.css";

function Component271(props) {
  const { children } = props;

  return (
    <Link to="/pet-carer-profile" className="align-self-flex-end">
      <div className="component-27-1">
        <div className="pet-owner helveticaneue-regular-normal-bon-jour-20px">{children}</div>
      </div>
    </Link>
  );
}

export default Component271;
