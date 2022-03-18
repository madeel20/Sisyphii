import React from "react";
import "./Component132.css";

function Component132(props) {
  const { name, speciesFelineBree } = props;

  return (
    <div className="group-48">
      <div className="name-5 helveticaneue-bold-tiber-16px">{name}</div>
      <div className="overlap-group-7">
        <p className="species-felinebree helveticaneue-bold-tiber-12px">{speciesFelineBree}</p>
      </div>
    </div>
  );
}

export default Component132;
