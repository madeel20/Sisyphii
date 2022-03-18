import React from "react";
import { Link } from "react-router-dom";
import Component221 from "../Component221";
import "./EmergencyContact.css";

function EmergencyContact(props) {
  const {
    emergencyContact,
    emergencyContactNameAndRelationship,
    name,
    emergencyContactNumber,
    phone,
    wouldEmergencyCont,
    place,
    save,
    component221Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="emergency-contact-1 screen">
        <div className="overlap-group2-9">
          <div className="rectangle-121-1"></div>
          <div className="emergency-contact-2 helveticaneue-bold-tiber-18px">{emergencyContact}</div>
          <p className="emergency-contact-name-and-relationship-1 helveticaneue-bold-tiber-14px">
            {emergencyContactNameAndRelationship}
          </p>
          <div className="overlap-group3-8">
            <div className="name-8 helveticaneue-bold-mountain-mist-14px">{name}</div>
          </div>
          <div className="emergency-contact-number-1 helveticaneue-bold-tiber-14px">{emergencyContactNumber}</div>
          <div className="overlap-group4-7">
            <div className="phone-3 helveticaneue-bold-mountain-mist-14px">{phone}</div>
          </div>
          <p className="would-emergency-cont-1 helveticaneue-bold-tiber-14px">{wouldEmergencyCont}</p>
          <Component221
            yes={component221Props.yes}
            line22={component221Props.line22}
            className={component221Props.className}
          />
          <div className="flex-row-28">
            <Link to="/budget-for-pet-care">
              <div className="place-10 helveticaneue-bold-tiber-14px">{place}</div>
            </Link>
            <Link to="/pet-carer-profile">
              <div className="save helveticaneue-bold-tiber-14px">{save}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyContact;
