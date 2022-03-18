import React from "react";
import { Link } from "react-router-dom";
import "./Component311.css";

function Component311(props) {
  const { children } = props;

  return (
    <Link to="/potential-adopters" className="align-self-flex-center">
      <div className="component-31-1">
        <div className="find-homes helveticaneue-bold-tiber-14px">{children}</div>
      </div>
    </Link>
  );
}

export default Component311;
