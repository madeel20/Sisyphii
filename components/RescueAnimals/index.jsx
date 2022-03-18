import React from "react";
import { Link } from "react-router-dom";
import Component251 from "../Component251";
import "./RescueAnimals.css";

function RescueAnimals(props) {
  const { place, logosisyphii, sisyphii, addNewRescueAnimal, component251Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="rescue-animals-1 screen">
        <div className="flex-row-4">
          <Link to="/charity-home">
            <div className="place-2 helveticaneue-bold-tiber-14px">{place}</div>
          </Link>
          <img className="logo-sisyphii-1" src={logosisyphii} />
          <div className="sisyphii-1 helveticaneue-regular-normal-tiber-20px">{sisyphii}</div>
        </div>
        <div className="overlap-group2-2">
          <Component251 name={component251Props.name} />
          <div className="overlap-group3-1">
            <div className="add-new-rescue-animal helveticaneue-bold-bon-jour-14px">{addNewRescueAnimal}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RescueAnimals;
