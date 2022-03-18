import React from "react";
import { Link } from "react-router-dom";
import "./Component291.css";

function Component291(props) {
  const { children } = props;

  return (
    <Link to="/to-be-adopted">
      <div className="component-29-1">
        <div className="overlap-group2-1">
          <Link to="/to-be-adopted">
            <div className="rectangle-147"></div>
          </Link>
          <p className="see-animals-looking-to-be-homed helveticaneue-bold-tiber-14px">{children}</p>
        </div>
      </div>
    </Link>
  );
}

export default Component291;
