import React from "react";
import { Link } from "react-router-dom";
import Component301 from "../Component301";
import Component311 from "../Component311";
import "./CharityHome.css";

function CharityHome(props) {
  const {
    place,
    logosisyphii,
    sisyphii,
    rescueAnimals,
    currentAnimalsLookingToBeHomed,
    potentialAdopters,
    checkApplicationsO,
    component301Props,
    component311Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="charity-home screen">
        <div className="flex-row">
          <Link to="/select-role">
            <div className="place helveticaneue-bold-tiber-14px">{place}</div>
          </Link>
          <img className="logo-sisyphii" src={logosisyphii} />
          <div className="sisyphii helveticaneue-regular-normal-tiber-20px">{sisyphii}</div>
        </div>
        <div className="overlap-group-container">
          <div className="overlap-group1">
            <div className="rescue-animals helveticaneue-bold-tiber-10px">{rescueAnimals}</div>
            <p className="current-animals-looking-to-be-homed helveticaneue-bold-tiber-12px">
              {currentAnimalsLookingToBeHomed}
            </p>
            <Component301>{component301Props.children}</Component301>
          </div>
          <div className="overlap-group2">
            <div className="potential-adopters helveticaneue-bold-tiber-10px">{potentialAdopters}</div>
            <p className="check-applications-o helveticaneue-bold-tiber-12px">{checkApplicationsO}</p>
            <Component311>{component311Props.children}</Component311>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharityHome;
