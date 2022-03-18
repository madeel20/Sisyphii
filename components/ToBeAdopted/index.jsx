import React from "react";
import { Link } from "react-router-dom";
import FreepikCatInject173 from "../FreepikCatInject173";
import "./ToBeAdopted.css";

function ToBeAdopted(props) {
  const {
    place,
    logosisyphii,
    sisyphii,
    findYourForeverFriend,
    search,
    iconSearch,
    cats,
    x2YearsOld,
    socialised,
    iconFeatherFilter,
    results,
    overlapGroup8,
    boba,
    address1,
    inFosterCareThroughLap,
    choco,
    address2,
    atPucCatAdoptionCentre,
    mocha,
    address3,
    inFosterCareThroughSpca,
    freepikCatInject1731Props,
    freepikCatInject1732Props,
    freepikCatInject1733Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="to-be-adopted screen">
        <div className="flex-row-14">
          <Link to="/pet-carer-profile">
            <div className="place-4 helveticaneue-bold-tiber-14px">{place}</div>
          </Link>
          <img className="logo-sisyphii-3" src={logosisyphii} />
          <div className="sisyphii-3 helveticaneue-regular-normal-tiber-20px">{sisyphii}</div>
        </div>
        <div className="flex-col-9">
          <div className="flex-col-10">
            <div className="find-your-forever-friend helveticaneue-bold-tiber-17px">{findYourForeverFriend}</div>
            <div className="search-container-1">
              <div className="search-1 helveticaneue-bold-mountain-mist-14px">{search}</div>
              <img className="icon-search" src={iconSearch} />
            </div>
            <div className="flex-row-15">
              <div className="overlap-group5-2">
                <div className="cats helveticaneue-regular-normal-tiber-10px">{cats}</div>
              </div>
              <div className="overlap-group11-1">
                <div className="x2-years-old helveticaneue-regular-normal-tiber-10px">{x2YearsOld}</div>
              </div>
              <div className="overlap-group3-3">
                <div className="socialised helveticaneue-regular-normal-tiber-10px">{socialised}</div>
              </div>
              <img className="icon-feather-filter-1" src={iconFeatherFilter} />
            </div>
            <div className="results-1 helveticaneue-bold-tiber-14px">{results}</div>
          </div>
          <div className="flex-row-16">
            <div className="overlap-group-container-2">
              <div className="overlap-group8-1" style={{ backgroundImage: `url(${overlapGroup8})` }}>
                <FreepikCatInject173 path1603={freepikCatInject1731Props.path1603} />
              </div>
              <div className="overlap-group-4 border-1px-dove-gray">
                <FreepikCatInject173 path1603={freepikCatInject1732Props.path1603} />
              </div>
              <div className="overlap-group-4 border-1px-dove-gray">
                <FreepikCatInject173 path1603={freepikCatInject1733Props.path1603} />
              </div>
            </div>
            <div className="flex-col-11 helveticaneue-regular-normal-tiber-12px">
              <div className="boba">{boba}</div>
              <div className="overlap-group7-2 helveticaneue-regular-normal-tiber-10px">
                <div className="address-2">{address1}</div>
                <p className="in-foster-care-through-lap">{inFosterCareThroughLap}</p>
              </div>
              <div className="flex-col-item">{choco}</div>
              <div className="overlap-group6-2 helveticaneue-regular-normal-tiber-10px">
                <div className="address-2">{address2}</div>
                <p className="at-puc-cat-adoption-centre">{atPucCatAdoptionCentre}</p>
              </div>
              <div className="flex-col-item">{mocha}</div>
              <div className="overlap-group9 helveticaneue-regular-normal-tiber-10px">
                <div className="address-2">{address3}</div>
                <p className="in-foster-care-through-spca">{inFosterCareThroughSpca}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToBeAdopted;
