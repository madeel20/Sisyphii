import React from "react";
import { Link } from "react-router-dom";
import "./LivingSpace.css";

function LivingSpace(props) {
  const {
    livingSpace,
    selectWhichTypeOfHomeYouLiveIn,
    villageHouse,
    sizeOfTheHouseInSqFt,
    address,
    forCatAdoptionPl,
    iconMaterialFileUpload1,
    nets2,
    forSmallAnimalAdo,
    iconMaterialFileUpload2,
    x51Odk47Xcgl_Ac_Sx466_,
    forReptileAdoption,
    iconMaterialFileUpload3,
    c7Rat3R0C9V71,
    place,
    next,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="living-space-1 screen">
        <div className="overlap-group4-5">
          <div className="scroll-group-6">
            <div className="overlap-group-10">
              <div className="rectangle-121"></div>
              <div className="rectangle-128"></div>
            </div>
            <div className="living-space-2 helveticaneue-bold-tiber-18px">{livingSpace}</div>
            <p className="select-which-type-of-home-you-live-in-1 helveticaneue-bold-tiber-14px">
              {selectWhichTypeOfHomeYouLiveIn}
            </p>
            <div className="overlap-group1-4">
              <div className="village-house-1 helveticaneue-bold-mountain-mist-14px">{villageHouse}</div>
            </div>
            <p className="size-of-the-house-in-sq-ft-1 helveticaneue-bold-tiber-14px">{sizeOfTheHouseInSqFt}</p>
            <div className="overlap-group2-7">
              <div className="address-6 helveticaneue-bold-mountain-mist-14px">{address}</div>
            </div>
            <div className="flex-row-23">
              <p className="for-cat-adoption-pl-1 helveticaneue-bold-tiber-14px">{forCatAdoptionPl}</p>
              <img className="icon-material-file-upload-1" src={iconMaterialFileUpload1} />
            </div>
            <img className="nets2-1" src={nets2} />
            <div className="flex-row-24">
              <p className="for-small-animal-ado-1 helveticaneue-bold-tiber-14px">{forSmallAnimalAdo}</p>
              <img className="icon-material-file-upload-2" src={iconMaterialFileUpload2} />
            </div>
            <img className="x51o-dk47-xcg-l_ac_sx466_-1" src={x51Odk47Xcgl_Ac_Sx466_} />
            <div className="overlap-group3-6">
              <p className="for-reptile-adoption-1 helveticaneue-bold-tiber-14px">{forReptileAdoption}</p>
              <img className="icon-material-file-upload-3" src={iconMaterialFileUpload3} />
            </div>
            <img className="c7rat3r0c9v71-1" src={c7Rat3R0C9V71} />
            <div className="flex-row-25">
              <Link to="/personal-particulars">
                <div className="place-7 helveticaneue-bold-tiber-14px">{place}</div>
              </Link>
              <Link to="/people-and-pets-in-the-household">
                <div className="next-1 helveticaneue-bold-tiber-14px">{next}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivingSpace;
