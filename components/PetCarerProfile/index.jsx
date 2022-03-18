import React from "react";
import { Link } from "react-router-dom";
import Component164 from "../Component164";
import Component291 from "../Component291";
import "./PetCarerProfile.css";

function PetCarerProfile(props) {
  const {
    place,
    rectangle112,
    hiJohn,
    lookingToAdopt,
    lookingToFoster,
    pleaseSelectWhich,
    allAnimals,
    iconIonicIosArrowDown,
    isThereAParticula,
    updateAdoptionForm,
    updateFosterForm,
    component164Props,
    component291Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pet-carer-profile screen">
        <div className="flex-row-1">
          <div className="flex-col">
            <Link to="/select-role">
              <div className="place-1 helveticaneue-bold-tiber-14px">{place}</div>
            </Link>
            <img className="rectangle-112" src={rectangle112} />
          </div>
          <div className="flex-col-1">
            <div className="flex-row-2">
              <div className="flex-col-2">
                <div className="hi-john helveticaneue-bold-tiber-16px">{hiJohn}</div>
                <div className="looking-to-adopt helveticaneue-bold-tiber-14px">{lookingToAdopt}</div>
              </div>
              <Component164 />
            </div>
            <div className="flex-row-3">
              <div className="looking-to-foster helveticaneue-bold-tiber-14px">{lookingToFoster}</div>
              <Component164 className={component164Props.className} />
            </div>
          </div>
        </div>
        <div className="flex-col-3">
          <p className="please-select-which helveticaneue-bold-tiber-14px">{pleaseSelectWhich}</p>
          <div className="overlap-group4">
            <div className="all-animals helveticaneue-bold-tiber-14px">{allAnimals}</div>
            <img className="icon-ionic-ios-arrow-down" src={iconIonicIosArrowDown} />
          </div>
          <p className="is-there-a-particula helveticaneue-bold-tiber-14px">{isThereAParticula}</p>
          <div className="rectangle-134"></div>
          <div className="overlap-group3">
            <Link to="/personal-particulars">
              <div className="rectangle-113"></div>
            </Link>
            <div className="update-adoption-form helveticaneue-bold-bon-jour-14px">{updateAdoptionForm}</div>
          </div>
          <div className="update-foster-form helveticaneue-bold-bon-jour-14px">{updateFosterForm}</div>
          <Component291>{component291Props.children}</Component291>
        </div>
      </div>
    </div>
  );
}

export default PetCarerProfile;
