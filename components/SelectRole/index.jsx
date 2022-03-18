import React from "react";
import Component271 from "../Component271";
import Component281 from "../Component281";
import "./SelectRole.css";

function SelectRole(props) {
  const { title, pleaseSelectYourRole, component271Props, component281Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="select-role screen">
        <h1 className="title">{title}</h1>
        <div className="please-select-your-role">{pleaseSelectYourRole}</div>
        <Component271>{component271Props.children}</Component271>
        <Component281>{component281Props.children}</Component281>
      </div>
    </div>
  );
}

export default SelectRole;
