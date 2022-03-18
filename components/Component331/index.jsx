import React from "react";
import { Link } from "react-router-dom";
import "./Component331.css";

function Component331(props) {
  const { ellipse29, waiWa } = props;

  return (
    <Link to="/adopter-profile">
      <div className="component-33-1">
        <img className="ellipse-29-1" src={ellipse29} />
        <div className="wai-wa-1 helveticaneue-regular-normal-tiber-16px">{waiWa}</div>
      </div>
    </Link>
  );
}

export default Component331;
