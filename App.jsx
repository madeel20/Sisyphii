import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CharityHome from "./components/CharityHome";
import PetCarerProfile from "./components/PetCarerProfile";
import RescueAnimals from "./components/RescueAnimals";
import PotentialAdopters from "./components/PotentialAdopters";
import SelectRole from "./components/SelectRole";
import PersonalParticulars from "./components/PersonalParticulars";
import ToBeAdopted from "./components/ToBeAdopted";
import Garry from "./components/Garry";
import AdopterProfile from "./components/AdopterProfile";
import LivingSpace from "./components/LivingSpace";
import PeopleAndPetsInTheHousehold from "./components/PeopleAndPetsInTheHousehold";
import BudgetForPetCare from "./components/BudgetForPetCare";
import EmergencyContact from "./components/EmergencyContact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|charity-home)">
          <CharityHome {...charityHomeData} />
        </Route>
        <Route path="/pet-carer-profile">
          <PetCarerProfile {...petCarerProfileData} />
        </Route>
        <Route path="/rescue-animals">
          <RescueAnimals
            place="Back"
            logosisyphii="/img/logosisyphii-1@1x.png"
            sisyphii="Sisyphii"
            addNewRescueAnimal="Add new rescue animal"
            component251Props={rescueAnimalsData.component251Props}
          />
        </Route>
        <Route path="/potential-adopters">
          <PotentialAdopters {...potentialAdoptersData} />
        </Route>
        <Route path="/select-role">
          <SelectRole
            title="Welcome back!"
            pleaseSelectYourRole="Please select your role"
            component271Props={selectRoleData.component271Props}
            component281Props={selectRoleData.component281Props}
          />
        </Route>
        <Route path="/personal-particulars">
          <PersonalParticulars {...personalParticularsData} />
        </Route>
        <Route path="/to-be-adopted">
          <ToBeAdopted {...toBeAdoptedData} />
        </Route>
        <Route path="/garry">
          <Garry {...garryData} />
        </Route>
        <Route path="/adopter-profile">
          <AdopterProfile {...adopterProfileData} />
        </Route>
        <Route path="/living-space">
          <LivingSpace {...livingSpaceData} />
        </Route>
        <Route path="/people-and-pets-in-the-household">
          <PeopleAndPetsInTheHousehold {...peopleAndPetsInTheHouseholdData} />
        </Route>
        <Route path="/budget-for-pet-care">
          <BudgetForPetCare {...budgetForPetCareData} />
        </Route>
        <Route path="/emergency-contact">
          <EmergencyContact {...emergencyContactData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const component301Data = {
    children: "View rescued animals",
};

const component311Data = {
    children: "Find homes",
};

const charityHomeData = {
    place: "Back",
    logosisyphii: "/img/logosisyphii-1@1x.png",
    sisyphii: "Sisyphii",
    rescueAnimals: "RESCUE ANIMALS",
    currentAnimalsLookingToBeHomed: "Current animals looking to be homed",
    potentialAdopters: "POTENTIAL ADOPTERS",
    checkApplicationsO: "Check applications of potential adopters",
    component301Props: component301Data,
    component311Props: component311Data,
};

const component1642Data = {
    className: "component-16-5",
};

const component291Data = {
    children: "See animals looking to be homed",
};

const petCarerProfileData = {
    place: "Back",
    rectangle112: "/img/rectangle-112@1x.png",
    hiJohn: "Hi, John!",
    lookingToAdopt: "Looking to adopt?",
    lookingToFoster: "Looking to foster?",
    pleaseSelectWhich: <>Please select which species you would like <br />to adopt and/or foster</>,
    allAnimals: "All animals",
    iconIonicIosArrowDown: "/img/icon-ionic-ios-arrow-down@1x.png",
    isThereAParticula: <>Is there a particular animal you would like <br />to adopt?</>,
    updateAdoptionForm: "Update Adoption Form",
    updateFosterForm: "Update Foster Form",
    component164Props: component1642Data,
    component291Props: component291Data,
};

const component251Data = {
    name: "Garry",
};

const rescueAnimalsData = {
    component251Props: component251Data,
};

const component321Data = {
    ellipse28: "/img/ellipse-28-1-1x-png@1x.png",
    surname: "Chan Tai Man",
};

const potentialAdoptersData = {
    place: "Back",
    logosisyphii: "/img/logosisyphii-1@1x.png",
    sisyphii: "Sisyphii",
    findTheirForeverHome: "Find their forever home",
    search: "Search",
    iconIonicIosSearch: "/img/icon-ionic-ios-search@1x.png",
    adoptingDogs: "Adopting Dogs",
    x2000Budget: ">2,000 budget",
    iconFeatherFilter: "/img/icon-feather-filter@1x.png",
    results: "Results",
    x20YearsAnimalCareExperience: "20+ years animal care experience",
    affiliatedWithSpca: "Affiliated with SPCA",
    iconAwesomeCheckCircle1: "/img/icon-awesome-check-circle-2@1x.png",
    ellipse29: "/img/ellipse-29-1@1x.png",
    ellipse30: "/img/ellipse-30-1@1x.png",
    jw: "JW",
    ellipse32: "/img/ellipse-32@1x.png",
    ellipse33: "/img/ellipse-33@1x.png",
    waiWa: "Wai Wa",
    iconAwesomeCheckCircle2: "/img/icon-awesome-check-circle-2@1x.png",
    address1: "5 years animal care experience",
    affiliatedWithPucLapHkdr: "Affiliated with PUC, LAP, HKDR",
    laiYingChung: "Lai Ying Chung",
    newToAnimalCare1: "New to animal care",
    noAffliations1: "No affliations",
    name: "Jason Wong",
    iconAwesomeCheckCircle3: "/img/icon-awesome-check-circle-2@1x.png",
    address2: "2 years animal care experience",
    noAffliations2: "No affliations",
    jemimaZabher: "Jemima Zabher",
    newToAnimalCare2: "New to animal care",
    affiliatedWithSaa: "Affiliated with SAA",
    liYingSuet: "Li Ying Suet",
    newToAnimalCare3: "New to animal care",
    noAffliations3: "No affliations",
    iconAwesomeCheckCircle4: "/img/icon-awesome-check-circle-2@1x.png",
    component321Props: component321Data,
};

const component271Data = {
    children: "Pet Owner",
};

const component281Data = {
    children: "Charity Personnel",
};

const selectRoleData = {
    component271Props: component271Data,
    component281Props: component281Data,
};

const component2211Data = {
    yes: "Yes",
    line22: "/img/line-22@1x.png",
};

const personalParticularsData = {
    personalParticulars: "Personal Particulars",
    fullName: "Full Name",
    name: "John Doe",
    contactNumber: "Contact Number",
    phone: "+852 9100 4300",
    age: "Age",
    doesYourEstateAllowPets: "Does your estate allow pets?",
    number: "38",
    homeAddress: "Home Address",
    flatC8F518Nat: "Flat C, 8/F, 518 Nathan Road, Yau Ma Tei",
    proofOfAddress: "Proof of Address",
    iconMaterialFileUpload: "/img/icon-material-file-upload-1@1x.png",
    gas_Bill_Eng: "/img/gas-bill-eng-1@1x.png",
    exit: "Exit",
    next: "Next",
    component221Props: component2211Data,
};

const freepikCatInject1731Data = {
    path1603: "/img/path-1603@1x.png",
};

const freepikCatInject1732Data = {
    path1603: "/img/path-1603-1@1x.png",
};

const freepikCatInject1733Data = {
    path1603: "/img/path-1603-1@1x.png",
};

const toBeAdoptedData = {
    place: "Back",
    logosisyphii: "/img/logosisyphii-1@1x.png",
    sisyphii: "Sisyphii",
    findYourForeverFriend: "Find your forever friend",
    search: "Search",
    iconSearch: "/img/icon-ionic-ios-search@1x.png",
    cats: "Cats",
    x2YearsOld: "<2 years old",
    socialised: "Socialised",
    iconFeatherFilter: "/img/icon-feather-filter@1x.png",
    results: "Results",
    overlapGroup8: "/img/ellipse-28-1@1x.png",
    boba: "Boba",
    address1: "18 month old male",
    inFosterCareThroughLap: "In foster care through LAP",
    choco: "Choco",
    address2: "2 year old male",
    atPucCatAdoptionCentre: "At PUC Cat Adoption Centre",
    mocha: "Mocha",
    address3: "4 month old female",
    inFosterCareThroughSpca: "In foster care through SPCA",
    freepikCatInject1731Props: freepikCatInject1731Data,
    freepikCatInject1732Props: freepikCatInject1732Data,
    freepikCatInject1733Props: freepikCatInject1733Data,
};

const freepikCatInject173222Data = {
    className: "freepik-cat-inject-173-1",
};

const component132Data = {
    name: "Garry",
    speciesFelineBree: <>Species: Feline<br />Breed: DSH<br />Sex: Male<br />DOB: 17 June 2020<br />MC No: 900133000382</>,
};

const component331Data = {
    ellipse29: "/img/ellipse-29@1x.png",
    waiWa: "Wai Wa",
};

const garryData = {
    place: "Back",
    logosisyphii: "/img/logosisyphii-1@1x.png",
    sisyphii: "Sisyphii",
    peopleWhoFilledAd: <>People who filled adoption forms <br />specifically for Garry</>,
    address1: "5 years animal care experience",
    affiliatedWithPucLapHkdr: "Affiliated with PUC, LAP, HKDR",
    iconCheck_Mark1: "/img/icon-awesome-check-circle-1@1x.png",
    ellipse30: "/img/ellipse-30@1x.png",
    jw: "JW",
    laiYingChung: "Lai Ying Chung",
    newToAnimalCare: "New to animal care",
    noAffliations1: "No affliations",
    name: "Jason Wong",
    iconCheck_Mark2: "/img/icon-awesome-check-circle-1@1x.png",
    address2: "2 years animal care experience",
    noAffliations2: "No affliations",
    freepikCatInject17322Props: freepikCatInject173222Data,
    component132Props: component132Data,
    component331Props: component331Data,
};

const component2212Data = {
    yes: "Yes",
    line22: "/img/line-22-1@1x.png",
    className: "component-22-4",
};

const component2213Data = {
    yes: "Yes, full-time",
    line22: "/img/line-22-1@1x.png",
    className: "component-22-3",
};

const component2214Data = {
    yes: "Yes",
    line22: "/img/line-22-1@1x.png",
    className: "component-22-2",
};

const peopleAndPetsInTheHouseholdData = {
    peopleAndPets: "People and Pets",
    howManyPeopleResideInTheHouse: "How many people reside in the house?",
    number1: "3",
    animalWOHumanSup: "Animal w/o human supervision hours per day",
    number2: "4",
    areThereYoungChildrenInTheHouse: "Are there young children in the house?",
    doYouEmployADomesticHelper: "Do you employ a domestic helper?",
    areThereOtherPetsInTheHouse: "Are there other pets in the house?",
    place: "Back",
    next: "Next",
    component2211Props: component2212Data,
    component2212Props: component2213Data,
    component2213Props: component2214Data,
};

const component2215Data = {
    yes: "Yes",
    line22: "/img/line-22-1@1x.png",
    className: "component-22-8",
};

const budgetForPetCareData = {
    petCareBudget: "Pet Care Budget",
    whatIsYourOccupation: "What is your occupation",
    tenantAtMomsBasement: "Tenant at mom’s basement",
    whatIsYourMonthly: "What is your monthly budget for the pet?",
    price: "1,500 HKD",
    inCaseOfThePets: <>In case of the pet’s emergency or illness, would<br />you be able to financially provide?</>,
    place: "Back",
    next: "Next",
    component221Props: component2215Data,
};

const component2216Data = {
    yes: "Yes",
    line22: "/img/line-22-1@1x.png",
    className: "component-22-9",
};

const emergencyContactData = {
    emergencyContact: "Emergency contact",
    emergencyContactNameAndRelationship: "Emergency contact name and relationship",
    name: "Shelly Spouse",
    emergencyContactNumber: "Emergency contact number",
    phone: "98826064",
    wouldEmergencyCont: <>Would emergency contact be able to care for <br />pet in case you are indisposed?</>,
    place: "Back",
    save: "Save",
    component221Props: component2216Data,
};

const adopterProfileData = {
    place: "Back",
    logosisyphii: "/img/logosisyphii-1@1x.png",
    sisyphii: "Sisyphii",
    waiWasDetails: "WAI WA’S DETAILS",
    personalParticulars: "Personal Particulars",
    fullName: "Full Name",
    name1: "John Doe",
    contactNumber: "Contact Number",
    phone1: "+852 9100 4300",
    age: "Age",
    doesYourEstateAllowPets: "Does your estate allow pets?",
    number1: "38",
    yes1: "Yes",
    homeAddress: "Home Address",
    flatC8F518Nat: "Flat C, 8/F, 518 Nathan Road, Yau Ma Tei",
    proofOfAddress: "Proof of Address",
    gas_Bill_Eng: "/img/gas-bill-eng@1x.png",
    livingSpace: "Living Space",
    selectWhichTypeOfHomeYouLiveIn: "Select which type of home you live in",
    villageHouse: "Village House",
    sizeOfTheHouseInSqFt: "Size of the house (in sq ft)",
    address: "320 sq ft",
    forCatAdoptionPl: <>For cat adoption, please upload images<br />of window nets</>,
    nets2: "/img/nets2-1@1x.png",
    forSmallAnimalAdo: <>For small animal adoption, please upload<br />images of enclosure</>,
    x51Odk47Xcgl_Ac_Sx466_: "/img/51odk47xcgl--ac-sx466--1@1x.png",
    forReptileAdoption: <>For reptile adoption, please upload images<br />of appropriate enclosure</>,
    c7Rat3R0C9V71: "/img/c7rat3r0c9v71-1@1x.png",
    peopleAndPets: "People and Pets",
    howManyPeopleResideInTheHouse: "How many people reside in the house?",
    number2: "3",
    animalWOHumanSup: "Animal w/o human supervision hours per day",
    number3: "4",
    areThereYoungChildrenInTheHouse: "Are there young children in the house?",
    yes2: "Yes",
    doYouEmployADomesticHelper: "Do you employ a domestic helper?",
    yesFullTime: "Yes, full-time",
    areThereOtherPetsInTheHouse: "Are there other pets in the house?",
    yes3: "Yes",
    petCareBudget: "Pet Care Budget",
    whatIsYourOccupation: "What is your occupation",
    tenantAtMomsBasement: "Tenant at mom’s basement",
    whatIsYourMonthly: "What is your monthly budget for the pet?",
    price: "1,500 HKD",
    inCaseOfThePets: <>In case of the pet’s emergency or illness, would<br />you be able to financially provide?</>,
    yes4: "Yes",
    emergencyContact: "Emergency contact",
    emergencyContactNameAndRelationship: "Emergency contact name and relationship",
    name2: "Shelly Spouse",
    emergencyContactNumber: "Emergency contact number",
    phone2: "98826064",
    wouldEmergencyCont: <>Would emergency contact be able to care for <br />pet in case you are indisposed?</>,
    yes5: "Yes",
    ellipse28: "/img/ellipse-28@1x.png",
};

const livingSpaceData = {
    livingSpace: "Living Space",
    selectWhichTypeOfHomeYouLiveIn: "Select which type of home you live in",
    villageHouse: "Village House",
    sizeOfTheHouseInSqFt: "Size of the house (in sq ft)",
    address: "320 sq ft",
    forCatAdoptionPl: <>For cat adoption, please upload images<br />of window nets</>,
    iconMaterialFileUpload1: "/img/icon-material-file-upload-1@1x.png",
    nets2: "/img/nets2-1@1x.png",
    forSmallAnimalAdo: <>For small animal adoption, please upload<br />images of enclosure</>,
    iconMaterialFileUpload2: "/img/icon-material-file-upload-1@1x.png",
    x51Odk47Xcgl_Ac_Sx466_: "/img/51odk47xcgl--ac-sx466--1@1x.png",
    forReptileAdoption: <>For reptile adoption, please upload images<br />of appropriate enclosure</>,
    iconMaterialFileUpload3: "/img/icon-material-file-upload-1@1x.png",
    c7Rat3R0C9V71: "/img/c7rat3r0c9v71-1@1x.png",
    place: "Back",
    next: "Next",
};

