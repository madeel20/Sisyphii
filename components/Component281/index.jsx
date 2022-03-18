import React from "react";
import { Link } from "react-router-dom";
import "./Component281.css";

function Component281(props) {
  const { children } = props;

  return (
    <Link to="/charity-home" className="align-self-flex-end">
      <div className="component-28-1">
        <div className="name-2 helveticaneue-regular-normal-bon-jour-20px">{children}</div>
      </div>
    </Link>
  );
}

export default Component281;
