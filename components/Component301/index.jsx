import React from "react";
import { Link } from "react-router-dom";
import "./Component301.css";

function Component301(props) {
  const { children } = props;

  return (
    <Link to="/rescue-animals" className="align-self-flex-center">
      <div className="component-30-1">
        <div className="view-rescued-animals helveticaneue-bold-tiber-14px">{children}</div>
      </div>
    </Link>
  );
}

export default Component301;
