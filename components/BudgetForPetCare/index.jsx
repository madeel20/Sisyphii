import React from "react";
import { Link } from "react-router-dom";
import Component221 from "../Component221";
import "./BudgetForPetCare.css";

function BudgetForPetCare(props) {
  const {
    petCareBudget,
    whatIsYourOccupation,
    tenantAtMomsBasement,
    whatIsYourMonthly,
    price,
    inCaseOfThePets,
    place,
    next,
    component221Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="budget-for-pet-care screen">
        <div className="overlap-group2-8">
          <div className="overlap-group3-7"></div>
          <div className="pet-care-budget-1 helveticaneue-bold-tiber-18px">{petCareBudget}</div>
          <div className="what-is-your-occupation-1 helveticaneue-bold-tiber-14px">{whatIsYourOccupation}</div>
          <div className="overlap-group-11">
            <div className="tenant-at-moms-basement-1 helveticaneue-bold-mountain-mist-14px">
              {tenantAtMomsBasement}
            </div>
          </div>
          <p className="what-is-your-monthly-1 helveticaneue-bold-tiber-14px">{whatIsYourMonthly}</p>
          <div className="overlap-group-11">
            <div className="price-1 helveticaneue-bold-mountain-mist-14px">{price}</div>
          </div>
          <p className="in-case-of-the-pets-1 helveticaneue-bold-tiber-14px">{inCaseOfThePets}</p>
          <Component221
            yes={component221Props.yes}
            line22={component221Props.line22}
            className={component221Props.className}
          />
          <div className="flex-row-27">
            <Link to="/people-and-pets-in-the-household">
              <div className="place-9 helveticaneue-bold-tiber-14px">{place}</div>
            </Link>
            <Link to="/emergency-contact">
              <div className="next-3 helveticaneue-bold-tiber-14px">{next}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetForPetCare;
