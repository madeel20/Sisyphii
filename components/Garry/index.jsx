import React from "react";
import { Link } from "react-router-dom";
import FreepikCatInject17322 from "../FreepikCatInject17322";
import Component132 from "../Component132";
import Component331 from "../Component331";
import "./Garry.css";

function Garry(props) {
  const {
    place,
    logosisyphii,
    sisyphii,
    peopleWhoFilledAd,
    address1,
    affiliatedWithPucLapHkdr,
    iconCheck_Mark1,
    ellipse30,
    jw,
    laiYingChung,
    newToAnimalCare,
    noAffliations1,
    name,
    iconCheck_Mark2,
    address2,
    noAffliations2,
    freepikCatInject17322Props,
    component132Props,
    component331Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="garry screen">
        <div className="flex-row-17">
          <Link to="/rescue-animals">
            <div className="place-5 helveticaneue-bold-tiber-14px">{place}</div>
          </Link>
          <img className="logo-sisyphii-4" src={logosisyphii} />
          <div className="sisyphii-4 helveticaneue-regular-normal-tiber-20px">{sisyphii}</div>
        </div>
        <div className="flex-col-12">
          <div className="flex-col-13">
            <div className="flex-row-18">
              <FreepikCatInject17322 className={freepikCatInject17322Props.className} />
              <Component132 name={component132Props.name} speciesFelineBree={component132Props.speciesFelineBree} />
            </div>
            <p className="people-who-filled-ad helveticaneue-bold-tiber-16px">{peopleWhoFilledAd}</p>
            <div className="overlap-group5-3">
              <div className="overlap-group3-4 helveticaneue-regular-normal-tiber-14px">
                <Component331 ellipse29={component331Props.ellipse29} waiWa={component331Props.waiWa} />
                <p className="address-3">{address1}</p>
                <p className="affiliated-with-puc-lap-hkdr">{affiliatedWithPucLapHkdr}</p>
              </div>
              <img className="icon-check_mark" src={iconCheck_Mark1} />
            </div>
          </div>
          <div className="flex-row-19">
            <div className="flex-col-14">
              <img className="ellipse-30" src={ellipse30} />
              <div className="overlap-group4-3 border-1px-dove-gray">
                <div className="jw-1">{jw}</div>
              </div>
            </div>
            <div className="flex-col-15">
              <div className="overlap-group2-5">
                <div className="lai-ying-chung-1">{laiYingChung}</div>
                <div className="new-to-animal-care-3 helveticaneue-regular-normal-tiber-14px">{newToAnimalCare}</div>
              </div>
              <div className="no-affliations helveticaneue-regular-normal-tiber-14px">{noAffliations1}</div>
              <div className="flex-row-20">
                <div className="name-4 helveticaneue-regular-normal-tiber-16px">{name}</div>
                <img className="icon-check_mark-1" src={iconCheck_Mark2} />
              </div>
              <p className="address-4 helveticaneue-regular-normal-tiber-14px">{address2}</p>
              <div className="no-affliations helveticaneue-regular-normal-tiber-14px">{noAffliations2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garry;
