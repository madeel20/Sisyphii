import React from "react";
import { Link } from "react-router-dom";
import Component221 from "../Component221";
import "./PersonalParticulars.css";

function PersonalParticulars(props) {
  const {
    personalParticulars,
    fullName,
    name,
    contactNumber,
    phone,
    age,
    doesYourEstateAllowPets,
    number,
    homeAddress,
    flatC8F518Nat,
    proofOfAddress,
    iconMaterialFileUpload,
    gas_Bill_Eng,
    exit,
    next,
    component221Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="personal-particulars screen">
        <div className="overlap-group2-4">
          <div className="overlap-group5-1"></div>
          <div className="personal-particulars-1 helveticaneue-bold-tiber-18px">{personalParticulars}</div>
          <div className="full-name helveticaneue-bold-tiber-14px">{fullName}</div>
          <div className="overlap-group4-2">
            <div className="name-3 helveticaneue-bold-mountain-mist-14px">{name}</div>
          </div>
          <div className="contact-number helveticaneue-bold-tiber-14px">{contactNumber}</div>
          <div className="overlap-group7-1">
            <div className="phone helveticaneue-bold-mountain-mist-14px">{phone}</div>
          </div>
          <div className="flex-row-11 helveticaneue-bold-tiber-14px">
            <div className="age">{age}</div>
            <p className="does-your-estate-allow-pets">{doesYourEstateAllowPets}</p>
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group6-1">
              <div className="number helveticaneue-bold-mountain-mist-14px">{number}</div>
            </div>
            <div className="overlap-group3-2">
              <div className="rectangle-122"></div>
              <div className="home-address helveticaneue-bold-tiber-14px">{homeAddress}</div>
              <p className="flat-c-8f-518-nat helveticaneue-bold-mountain-mist-14px-2">{flatC8F518Nat}</p>
              <Component221 yes={component221Props.yes} line22={component221Props.line22} />
            </div>
          </div>
          <div className="flex-row-12">
            <div className="proof-of-address helveticaneue-bold-tiber-14px">{proofOfAddress}</div>
            <img className="icon-material-file-upload" src={iconMaterialFileUpload} />
          </div>
          <img className="gas_bill_eng" src={gas_Bill_Eng} />
          <div className="flex-row-13">
            <Link to="/pet-carer-profile">
              <div className="exit helveticaneue-bold-tiber-14px">{exit}</div>
            </Link>
            <Link to="/living-space">
              <div className="next helveticaneue-bold-tiber-14px">{next}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalParticulars;
