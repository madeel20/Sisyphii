import React from "react";
import { Link } from "react-router-dom";
import Component321 from "../Component321";
import "./PotentialAdopters.css";

function PotentialAdopters(props) {
  const {
    place,
    logosisyphii,
    sisyphii,
    findTheirForeverHome,
    search,
    iconIonicIosSearch,
    adoptingDogs,
    x2000Budget,
    iconFeatherFilter,
    results,
    x20YearsAnimalCareExperience,
    affiliatedWithSpca,
    iconAwesomeCheckCircle1,
    ellipse29,
    ellipse30,
    jw,
    ellipse32,
    ellipse33,
    waiWa,
    iconAwesomeCheckCircle2,
    address1,
    affiliatedWithPucLapHkdr,
    laiYingChung,
    newToAnimalCare1,
    noAffliations1,
    name,
    iconAwesomeCheckCircle3,
    address2,
    noAffliations2,
    jemimaZabher,
    newToAnimalCare2,
    affiliatedWithSaa,
    liYingSuet,
    newToAnimalCare3,
    noAffliations3,
    iconAwesomeCheckCircle4,
    component321Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="potential-adopters-1 screen">
        <div className="flex-row-5">
          <Link to="/charity-home">
            <div className="place-3 helveticaneue-bold-tiber-14px">{place}</div>
          </Link>
          <img className="logo-sisyphii-2" src={logosisyphii} />
          <div className="sisyphii-2 helveticaneue-regular-normal-tiber-20px">{sisyphii}</div>
        </div>
        <div className="flex-col-4">
          <div className="flex-col-5">
            <div className="find-their-forever-home helveticaneue-bold-tiber-17px">{findTheirForeverHome}</div>
            <div className="search-container">
              <div className="search helveticaneue-bold-mountain-mist-14px">{search}</div>
              <img className="icon-ionic-ios-search" src={iconIonicIosSearch} />
            </div>
            <div className="flex-row-6">
              <div className="overlap-group6">
                <div className="adopting-dogs helveticaneue-regular-normal-tiber-10px">{adoptingDogs}</div>
              </div>
              <div className="overlap-group8">
                <div className="x2000-budget helveticaneue-regular-normal-tiber-10px">{x2000Budget}</div>
              </div>
              <img className="icon-feather-filter" src={iconFeatherFilter} />
            </div>
            <div className="results helveticaneue-bold-tiber-14px">{results}</div>
            <div className="overlap-group11">
              <div className="overlap-group2-3 helveticaneue-regular-normal-tiber-10px">
                <Component321 ellipse28={component321Props.ellipse28} surname={component321Props.surname} />
                <p className="x20-years-animal-care-experience">{x20YearsAnimalCareExperience}</p>
                <div className="affiliated-with-spca">{affiliatedWithSpca}</div>
              </div>
              <img className="icon-awesome-check-circle" src={iconAwesomeCheckCircle1} />
            </div>
          </div>
          <div className="flex-row-7">
            <div className="flex-col-6">
              <img className="ellipse-29" src={ellipse29} />
              <img className="ellipse-3" src={ellipse30} />
              <div className="overlap-group5 border-1px-dove-gray">
                <div className="jw">{jw}</div>
              </div>
              <img className="ellipse-3" src={ellipse32} />
              <img className="ellipse-3" src={ellipse33} />
            </div>
            <div className="flex-col-7 helveticaneue-regular-normal-tiber-12px">
              <div className="flex-row-8">
                <div className="wai-wa">{waiWa}</div>
                <img className="icon-awesome-check-circle-1" src={iconAwesomeCheckCircle2} />
              </div>
              <div className="overlap-group1-2 helveticaneue-regular-normal-tiber-10px">
                <p className="address">{address1}</p>
                <p className="liat">{affiliatedWithPucLapHkdr}</p>
              </div>
              <div className="lai-ying-chung">{laiYingChung}</div>
              <div className="overlap-group-3 helveticaneue-regular-normal-tiber-10px">
                <div className="new-to-animal-care">{newToAnimalCare1}</div>
                <div className="liat">{noAffliations1}</div>
              </div>
              <div className="flex-row-9">
                <div className="name-1">{name}</div>
                <img className="icon-awesome-check-circle-2" src={iconAwesomeCheckCircle3} />
              </div>
              <div className="overlap-group4-1 helveticaneue-regular-normal-tiber-10px">
                <p className="address-1">{address2}</p>
                <div className="liat">{noAffliations2}</div>
              </div>
              <div className="flex-row-10">
                <div className="flex-col-8 helveticaneue-regular-normal-tiber-12px">
                  <div className="jemima-zabher">{jemimaZabher}</div>
                  <div className="overlap-group-3 helveticaneue-regular-normal-tiber-10px">
                    <div className="new-to-animal-care-1">{newToAnimalCare2}</div>
                    <div className="liat">{affiliatedWithSaa}</div>
                  </div>
                  <div className="li-ying-suet">{liYingSuet}</div>
                  <div className="overlap-group7 helveticaneue-regular-normal-tiber-10px">
                    <div className="new-to-animal-care-2">{newToAnimalCare3}</div>
                    <div className="liat">{noAffliations3}</div>
                  </div>
                </div>
                <img className="icon-awesome-check-circle-3" src={iconAwesomeCheckCircle4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotentialAdopters;
