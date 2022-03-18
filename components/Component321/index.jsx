import React from "react";
import { Link } from "react-router-dom";
import "./Component321.css";

function Component321(props) {
  const { ellipse28, surname } = props;

  return (
    <Link to="/adopter-profile">
      <div className="component-32-1">
        <img className="ellipse-28" src={ellipse28} />
        <div className="surname helveticaneue-regular-normal-tiber-12px">{surname}</div>
      </div>
    </Link>
  );
}

export default Component321;
