import React from "react";
import { Link } from "react-router-dom";
import "./AdopterProfile.css";

function AdopterProfile(props) {
  const {
    place,
    logosisyphii,
    sisyphii,
    waiWasDetails,
    personalParticulars,
    fullName,
    name1,
    contactNumber,
    phone1,
    age,
    doesYourEstateAllowPets,
    number1,
    yes1,
    homeAddress,
    flatC8F518Nat,
    proofOfAddress,
    gas_Bill_Eng,
    livingSpace,
    selectWhichTypeOfHomeYouLiveIn,
    villageHouse,
    sizeOfTheHouseInSqFt,
    address,
    forCatAdoptionPl,
    nets2,
    forSmallAnimalAdo,
    x51Odk47Xcgl_Ac_Sx466_,
    forReptileAdoption,
    c7Rat3R0C9V71,
    peopleAndPets,
    howManyPeopleResideInTheHouse,
    number2,
    animalWOHumanSup,
    number3,
    areThereYoungChildrenInTheHouse,
    yes2,
    doYouEmployADomesticHelper,
    yesFullTime,
    areThereOtherPetsInTheHouse,
    yes3,
    petCareBudget,
    whatIsYourOccupation,
    tenantAtMomsBasement,
    whatIsYourMonthly,
    price,
    inCaseOfThePets,
    yes4,
    emergencyContact,
    emergencyContactNameAndRelationship,
    name2,
    emergencyContactNumber,
    phone2,
    wouldEmergencyCont,
    yes5,
    ellipse28,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="adopter-profile screen">
        <div className="flex-row-21">
          <Link to="/potential-adopters">
            <div className="place-6 helveticaneue-bold-tiber-14px">{place}</div>
          </Link>
          <img className="logo-sisyphii-5" src={logosisyphii} />
          <div className="sisyphii-5 helveticaneue-regular-normal-tiber-20px">{sisyphii}</div>
        </div>
        <div className="overlap-group18">
          <div className="wai-was-details helveticaneue-bold-tiber-18px">{waiWasDetails}</div>
          <div className="overlap-group19">
            <div className="scroll-group-7">
              <div className="personal-particulars-2 helveticaneue-bold-tiber-18px">{personalParticulars}</div>
              <div className="full-name-1 helveticaneue-bold-tiber-14px">{fullName}</div>
              <div className="overlap-group5-4">
                <div className="name-6 helveticaneue-bold-mountain-mist-14px">{name1}</div>
              </div>
              <div className="contact-number-1 helveticaneue-bold-tiber-14px">{contactNumber}</div>
              <div className="overlap-group14">
                <div className="phone-1 helveticaneue-bold-mountain-mist-14px">{phone1}</div>
              </div>
              <div className="flex-row-22 helveticaneue-bold-tiber-14px">
                <div className="age-1">{age}</div>
                <p className="does-your-estate-allow-pets-1">{doesYourEstateAllowPets}</p>
              </div>
              <div className="overlap-group-container-3">
                <div className="overlap-group10">
                  <div className="number-2 helveticaneue-bold-mountain-mist-14px">{number1}</div>
                </div>
                <div className="overlap-group2-6">
                  <div className="yes-5 helveticaneue-bold-mountain-mist-14px">{yes1}</div>
                </div>
              </div>
              <div className="home-address-1 helveticaneue-bold-tiber-14px">{homeAddress}</div>
              <div className="overlap-group13">
                <p className="flat-c-8f-518-nat-1 helveticaneue-bold-mountain-mist-14px-2">{flatC8F518Nat}</p>
              </div>
              <div className="proof-of-address-1 helveticaneue-bold-tiber-14px">{proofOfAddress}</div>
              <img className="gas_bill_eng-1" src={gas_Bill_Eng} />
              <div className="living-space helveticaneue-bold-tiber-18px">{livingSpace}</div>
              <p className="select-which-type-of-home-you-live-in helveticaneue-bold-tiber-14px">
                {selectWhichTypeOfHomeYouLiveIn}
              </p>
              <div className="overlap-group3-5">
                <div className="village-house helveticaneue-bold-mountain-mist-14px">{villageHouse}</div>
              </div>
              <p className="size-of-the-house-in-sq-ft helveticaneue-bold-tiber-14px">{sizeOfTheHouseInSqFt}</p>
              <div className="overlap-group6-3">
                <div className="address-5 helveticaneue-bold-mountain-mist-14px">{address}</div>
              </div>
              <p className="for-cat-adoption-pl helveticaneue-bold-tiber-14px">{forCatAdoptionPl}</p>
              <img className="nets2" src={nets2} />
              <p className="for-small-animal-ado helveticaneue-bold-tiber-14px">{forSmallAnimalAdo}</p>
              <img className="x51o-dk47-xcg-l_ac_sx466_" src={x51Odk47Xcgl_Ac_Sx466_} />
              <p className="for-reptile-adoption helveticaneue-bold-tiber-14px">{forReptileAdoption}</p>
              <img className="c7rat3r0c9v71" src={c7Rat3R0C9V71} />
              <div className="people-and-pets helveticaneue-bold-tiber-18px">{peopleAndPets}</div>
              <p className="how-many-people-reside-in-the-house helveticaneue-bold-tiber-14px">
                {howManyPeopleResideInTheHouse}
              </p>
              <div className="overlap-group-9">
                <div className="number-1 helveticaneue-bold-mountain-mist-14px">{number2}</div>
              </div>
              <p className="animal-wo-human-sup helveticaneue-bold-tiber-14px">{animalWOHumanSup}</p>
              <div className="overlap-group7-3">
                <div className="number-1 helveticaneue-bold-mountain-mist-14px">{number3}</div>
              </div>
              <p className="are-there-young-children-in-the-house helveticaneue-bold-tiber-14px">
                {areThereYoungChildrenInTheHouse}
              </p>
              <div className="overlap-group17">
                <div className="yes-6 helveticaneue-bold-mountain-mist-14px">{yes2}</div>
              </div>
              <p className="do-you-employ-a-domestic-helper helveticaneue-bold-tiber-14px">
                {doYouEmployADomesticHelper}
              </p>
              <div className="overlap-group16">
                <div className="yes-full-time helveticaneue-bold-mountain-mist-14px">{yesFullTime}</div>
              </div>
              <p className="are-there-other-pets-in-the-house helveticaneue-bold-tiber-14px">
                {areThereOtherPetsInTheHouse}
              </p>
              <div className="overlap-group11-2">
                <div className="yes-7 helveticaneue-bold-mountain-mist-14px">{yes3}</div>
              </div>
              <div className="pet-care-budget helveticaneue-bold-tiber-18px">{petCareBudget}</div>
              <div className="what-is-your-occupation helveticaneue-bold-tiber-14px">{whatIsYourOccupation}</div>
              <div className="overlap-group-8">
                <div className="tenant-at-moms-basement helveticaneue-bold-mountain-mist-14px">
                  {tenantAtMomsBasement}
                </div>
              </div>
              <p className="what-is-your-monthly helveticaneue-bold-tiber-14px">{whatIsYourMonthly}</p>
              <div className="overlap-group-8">
                <div className="price helveticaneue-bold-mountain-mist-14px">{price}</div>
              </div>
              <p className="in-case-of-the-pets helveticaneue-bold-tiber-14px">{inCaseOfThePets}</p>
              <div className="overlap-group9-1">
                <div className="yes-8 helveticaneue-bold-mountain-mist-14px">{yes4}</div>
              </div>
              <div className="emergency-contact helveticaneue-bold-tiber-18px">{emergencyContact}</div>
              <p className="emergency-contact-name-and-relationship helveticaneue-bold-tiber-14px">
                {emergencyContactNameAndRelationship}
              </p>
              <div className="overlap-group15">
                <div className="name-7 helveticaneue-bold-mountain-mist-14px">{name2}</div>
              </div>
              <div className="emergency-contact-number helveticaneue-bold-tiber-14px">{emergencyContactNumber}</div>
              <div className="overlap-group4-4">
                <div className="phone-2 helveticaneue-bold-mountain-mist-14px">{phone2}</div>
              </div>
              <p className="would-emergency-cont helveticaneue-bold-tiber-14px">{wouldEmergencyCont}</p>
              <div className="overlap-group12">
                <div className="yes-9 helveticaneue-bold-mountain-mist-14px">{yes5}</div>
              </div>
            </div>
            <img className="ellipse-28-1" src={ellipse28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdopterProfile;
