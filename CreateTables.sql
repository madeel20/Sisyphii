/* CREATE DATABASE Sisyphii; */

USE Sisyphii

CREATE TABLE Charity(
	Charity_ID VARCHAR(20) NOT NULL,
	Charity_Name VARCHAR(50) NOT NULL,
	Charity_Contact VARCHAR(50),
	PRIMARY KEY(Charity_ID)
);

CREATE TABLE Staff(
	Staff_ID VARCHAR(20) NOT NULL,
	Staff_Name VARCHAR(50) NOT NULL,
	Staff_Role VARCHAR(20) NOT NULL,
	Staff_Contact INT,
    Charity_ID VARCHAR(20) NOT NULL,
	PRIMARY KEY(Staff_ID),
	FOREIGN KEY (Charity_ID) REFERENCES Charity(Charity_ID)
);

CREATE TABLE Adoption_Centre(
	Centre_Address VARCHAR(100) NOT NULL,
	Branch_Name VARCHAR(50) NOT NULL,
    Charity_ID VARCHAR(20) NOT NULL,
	PRIMARY KEY(Centre_Address),
	FOREIGN KEY (Charity_ID) REFERENCES Charity(Charity_ID)
);

CREATE TABLE Animals_At_Centre(
	Centre_Address VARCHAR(100) NOT NULL,
    Species_Housed VARCHAR(20) NOT NULL,
	No_Species INT,
	PRIMARY KEY(Centre_Address, Species_Housed),
	FOREIGN KEY (Centre_Address) REFERENCES Adoption_Centre(Centre_Address)
);

CREATE TABLE Volunteer(
	Volunteer_ID VARCHAR(20) NOT NULL,
	Volunteer_Name VARCHAR(20) NOT NULL,
	Volunteer_Contact INT,
	Last_V_Date DATETIME,
	Next_V_Date DATETIME,
    Centre_Address VARCHAR(100) NOT NULL,
	PRIMARY KEY(Volunteer_ID),
	FOREIGN KEY (Centre_Address) REFERENCES Adoption_Centre(Centre_Address)
);


CREATE TABLE Animal(
	Animal_ID VARCHAR(20) NOT NULL,
	Animal_Name VARCHAR(20) NOT NULL,
	DOB DATE NOT NULL,
	Species VARCHAR(20) NOT NULL,
	Breed VARCHAR(20) NOT NULL,
	Gender VARCHAR(10) NOT NULL,
	Desex_Status VARCHAR(10) NOT NULL,
	Housing_Status VARCHAR(20) NOT NULL,
	PRIMARY KEY(Animal_ID)
);

CREATE TABLE Vaccination(
	Vaccination_ID VARCHAR(20) NOT NULL,
	Vaccination_Type VARCHAR(50) NOT NULL,
	Last_Jab DATE,
	Next_Jab DATE,
    Animal_ID VARCHAR(20) NOT NULL,
	PRIMARY KEY(Vaccination_ID),
	FOREIGN KEY (Animal_ID) REFERENCES Animal(Animal_ID)
);

CREATE TABLE Rescue_Details(
	Charity_ID VARCHAR(20) NOT NULL,
	Animal_ID VARCHAR(20) NOT NULL,
    Rescue_Type VARCHAR(50) NOT NULL,
    Rescue_Date DATE NOT NULL,
    Abuser VARCHAR(50),
    Surrendered_By VARCHAR(50),
    Sur_Reason VARCHAR(50),
    PRIMARY KEY(Charity_ID, Animal_ID),
    FOREIGN KEY(Charity_ID) REFERENCES Charity(Charity_ID),
    FOREIGN KEY(Animal_ID) REFERENCES Animal(Animal_ID)
);

CREATE TABLE Partnered_Vet(
    Clinic_Address VARCHAR(100) NOT NULL,
    Clinic_Name VARCHAR(50) NOT NULL,
    Clinic_Contact INT NOT NULL,
    Charity_ID VARCHAR(20) NOT NULL,
    PRIMARY KEY(Clinic_Address),
    FOREIGN KEY (Charity_ID) REFERENCES Charity(Charity_ID)
);



CREATE TABLE Veterinarian(
    Vet_ID VARCHAR(50) NOT NULL,
    Vet_Name VARCHAR(50) NOT NULL,
    Vet_Qualifications VARCHAR(100) NOT NULL,
    Clinic_Address VARCHAR(100) NOT NULL,
    PRIMARY KEY(Vet_ID), 
    FOREIGN KEY(Clinic_Address) REFERENCES Partnered_Vet(Clinic_Address)
);

CREATE TABLE Vet_Visit(
    Vet_ID VARCHAR(50) NOT NULL,
    Animal_ID VARCHAR(20) NOT NULL,
    Date_Visited DATE NOT NULL,
    Diagnosis VARCHAR(100) NOT NULL,
    Invoice INT,
    PRIMARY KEY(Vet_ID, Animal_ID, Date_Visited),
    FOREIGN KEY(Vet_ID) REFERENCES Veterinarian(Vet_ID),
    FOREIGN KEY(Animal_ID) REFERENCES Animal(Animal_ID)
);

CREATE TABLE Adopter(
    Adopter_ID VARCHAR(20) NOT NULL,
    Adopter_Name VARCHAR(50) NOT NULL,
    Adopter_Contact INT NOT NULL,
    PRIMARY KEY(Adopter_ID)
);

CREATE TABLE Adopter_Form(
    Adoption_Form_ID VARCHAR(20) NOT NULL,
    AF_Created DATE NOT NULL,
    AF_Modified DATE,
    AF_Answers VARCHAR(50),
    Adopter_ID VARCHAR(20) NOT NULL,
    PRIMARY KEY(Adoption_Form_ID),
    FOREIGN KEY(Adopter_ID) REFERENCES Adopter(Adopter_ID)
);

CREATE TABLE Adopter_Verification(
    Adoption_Form_ID VARCHAR(20) NOT NULL,
    Charity_ID VARCHAR(20) NOT NULL,
    Verification_Date DATE NOT NULL,
    Verification_Mode VARCHAR(20) NOT NULL,
    PRIMARY KEY(Adoption_Form_ID, Charity_ID),
    FOREIGN KEY(Adoption_Form_ID) REFERENCES Adopter_Form(Adoption_Form_ID),
    FOREIGN KEY(Charity_ID) REFERENCES Charity(Charity_ID)
);

CREATE TABLE Successful_Adoptions(
    Adopter_ID VARCHAR(20) NOT NULL,
    Charity_ID VARCHAR(20) NOT NULL,
    Animal_ID VARCHAR(20) NOT NULL,
    Adoption_Date DATE NOT NULL,
    Adoption_Fee INT,
    PRIMARY KEY(Adopter_ID, Charity_ID, Animal_ID, Adoption_Date),
    FOREIGN KEY(Adopter_ID) REFERENCES Adopter(Adopter_ID),
    FOREIGN KEY(Charity_ID) REFERENCES Charity(Charity_ID),
    FOREIGN KEY(Animal_ID) REFERENCES Animal(Animal_ID)
);

CREATE TABLE Foster(
	Foster_ID VARCHAR(20) NOT NULL,
	Foster_Name VARCHAR(50) NOT NULL,
	Foster_Contact INT NOT NULL,
	PRIMARY KEY(Foster_ID)
);

CREATE TABLE Foster_Form(
	Foster_Form_ID VARCHAR(20) NOT NULL,
	FF_Created DATE NOT NULL,
	FF_Modified DATE, 
	FF_Answers VARCHAR(50),
    Foster_ID VARCHAR(20) NOT NULL,
	PRIMARY KEY(Foster_Form_ID),
	FOREIGN KEY(Foster_ID) REFERENCES Foster(Foster_ID)
);

CREATE TABLE Foster_Verification(
	Foster_Form_ID VARCHAR(20) NOT NULL,
	Charity_ID VARCHAR(20) NOT NULL,
	Verification_Mode VARCHAR(20) NOT NULL,
	Verification_Date DATE NOT NULL,
    PRIMARY KEY(Foster_Form_ID, Charity_ID),
    FOREIGN KEY(Foster_Form_ID) REFERENCES Foster_Form(Foster_Form_ID),
    FOREIGN KEY(Charity_ID) REFERENCES Charity(Charity_ID)
); 

CREATE TABLE Current_Foster(
    Current_Foster_ID VARCHAR(20) NOT NULL,
    Foster_Start_Date DATE NOT NULL,
    Foster_Length INT,
    Foster_ID VARCHAR(20) NOT NULL,
    Charity_ID VARCHAR(20) NOT NULL,
    Animal_ID VARCHAR(20) NOT NULL,
    PRIMARY KEY(Current_Foster_ID),
    FOREIGN KEY(Foster_ID) REFERENCES Foster(Foster_ID),
    FOREIGN KEY(Charity_ID) REFERENCES Charity(Charity_ID),
    FOREIGN KEY(Animal_ID) REFERENCES Animal(Animal_ID)
);	

CREATE TABLE Vet_Request(
	Current_Foster_ID VARCHAR(20) NOT NULL,
	Date_Requested DATE NOT NULL,
	Date_Approved DATE, 
	Symptoms VARCHAR(100) NOT NULL,
	PRIMARY KEY(Current_Foster_ID),
	FOREIGN KEY(Current_Foster_ID) REFERENCES Current_Foster(Current_Foster_ID)
);
	




