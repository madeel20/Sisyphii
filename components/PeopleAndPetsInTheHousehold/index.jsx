import React from "react";
import { Link } from "react-router-dom";
import Component221 from "../Component221";
import "./PeopleAndPetsInTheHousehold.css";

function PeopleAndPetsInTheHousehold(props) {
  const {
    peopleAndPets,
    howManyPeopleResideInTheHouse,
    number1,
    animalWOHumanSup,
    number2,
    areThereYoungChildrenInTheHouse,
    doYouEmployADomesticHelper,
    areThereOtherPetsInTheHouse,
    place,
    next,
    component2211Props,
    component2212Props,
    component2213Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="people-and-pets-in-the-household screen">
        <div className="overlap-group4-6">
          <div className="overlap-group7-4"></div>
          <div className="people-and-pets-1 helveticaneue-bold-tiber-18px">{peopleAndPets}</div>
          <p className="how-many-people-reside-in-the-house-1 helveticaneue-bold-tiber-14px">
            {howManyPeopleResideInTheHouse}
          </p>
          <div className="overlap-group5-5">
            <div className="number-3 helveticaneue-bold-mountain-mist-14px">{number1}</div>
          </div>
          <p className="animal-wo-human-sup-1 helveticaneue-bold-tiber-14px">{animalWOHumanSup}</p>
          <div className="overlap-group6-4">
            <div className="number-3 helveticaneue-bold-mountain-mist-14px">{number2}</div>
          </div>
          <p className="are-there-young-children-in-the-house-1 helveticaneue-bold-tiber-14px">
            {areThereYoungChildrenInTheHouse}
          </p>
          <div className="overlap-group8-2">
            <p className="do-you-employ-a-domestic-helper-1 helveticaneue-bold-tiber-14px">
              {doYouEmployADomesticHelper}
            </p>
            <p className="are-there-other-pets-in-the-house-1 helveticaneue-bold-tiber-14px">
              {areThereOtherPetsInTheHouse}
            </p>
            <Component221
              yes={component2211Props.yes}
              line22={component2211Props.line22}
              className={component2211Props.className}
            />
            <Component221
              yes={component2212Props.yes}
              line22={component2212Props.line22}
              className={component2212Props.className}
            />
            <Component221
              yes={component2213Props.yes}
              line22={component2213Props.line22}
              className={component2213Props.className}
            />
          </div>
          <div className="flex-row-26">
            <Link to="/living-space">
              <div className="place-8 helveticaneue-bold-tiber-14px">{place}</div>
            </Link>
            <Link to="/budget-for-pet-care">
              <div className="next-2 helveticaneue-bold-tiber-14px">{next}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleAndPetsInTheHousehold;
