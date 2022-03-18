import React from "react";
import "./Component221.css";

function Component221(props) {
  const { yes, line22, className } = props;

  return (
    <div className={`component-22-1 ${className || ""}`}>
      <div className="overlap-group-6">
        <div className="yes helveticaneue-bold-mountain-mist-14px">{yes}</div>
        <div className="overlap-group1-3 border-1px-dove-gray">
          <img className="union-6-1" src="/img/union-6-1@1x.png" />
        </div>
      </div>
      <img className="line-22-1" src={line22} />
    </div>
  );
}

export default Component221;
