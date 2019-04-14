export const schema: string = `
SET search_path = tp5;
DROP SCHEMA IF EXISTS tp5_schema CASCADE;

CREATE SCHEMA IF NOT EXISTS tp5_schema;

CREATE TABLE IF NOT EXISTS tp5_schema.Clinique (
	noClinique  VARCHAR(10)  NOT NULL,
	adresse     VARCHAR(30)  NOT NULL,
	noTel       VARCHAR(12)  NOT NULL,
	noTelecop   VARCHAR(12)  NOT NULL,
	nbEmploye   INTEGER		 DEFAULT 0,
	noGest      VARCHAR(10)  NOT NULL,

	PRIMARY KEY(noClinique)
);

CREATE TABLE IF NOT EXISTS tp5_schema.Employe (
	noPersonnel VARCHAR(10)  NOT NULL,
	nom			VARCHAR(25)  NOT NULL,
	adresse     VARCHAR(30)  NOT NULL,
	noTel       VARCHAR(12)  NOT NULL,
	DOB			DATE		 NOT NULL,
	sexe		CHAR(1)      NOT NULL,
	NAS			VARCHAR(9)   NOT NULL UNIQUE,
	fonction    VARCHAR(20)	 NOT NULL,
	salaire     NUMERIC(8,2) NOT NULL,
	noClinique  VARCHAR(10)  NOT NULL,

	PRIMARY KEY(noPersonnel),
	FOREIGN KEY(noClinique) REFERENCES tp5_schema.Clinique(noClinique) ON DELETE CASCADE,
	CHECK (sexe IN ('M', 'F')),
	CHECK (fonction IN ('Gestionnaire', 'Vétérinaire', 'Infirmière', 'Secrétaire', 'Entretien'))
);

--ALTER TABLE tp5_schema.Clinique ADD CONSTRAINT fk_employe_clinique FOREIGN KEY (noGest) REFERENCES tp5_schema.Employe(noPersonnel);


CREATE TABLE IF NOT EXISTS tp5_schema.Veterinaire (
	noVet  		VARCHAR(10)  NOT NULL,
	enService   BOOLEAN		 NOT NULL,

	PRIMARY KEY(noVet),
	FOREIGN KEY(noVet) REFERENCES tp5_schema.Employe(noPersonnel) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tp5_schema.Proprietaire (
	noProp 		VARCHAR(10)  NOT NULL,
	noClinique  VARCHAR(10)  NOT NULL,
	nom			VARCHAR(25)  NOT NULL,
	adresse     VARCHAR(30)  NOT NULL,
	noTel       VARCHAR(12)  NOT NULL,

	PRIMARY KEY(noProp, noClinique),
	FOREIGN KEY(noClinique) REFERENCES tp5_schema.Clinique(noClinique) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tp5_schema.Animal (
	noAnimal    VARCHAR(10)  NOT NULL,
	noClinique  VARCHAR(10)  NOT NULL,
	nom			VARCHAR(25)  NOT NULL,
	type        VARCHAR(20)  NOT NULL,
	description VARCHAR(50)  NOT NULL,
	DOB			DATE		 NOT NULL,
	etat		VARCHAR(10)	 NOT NULL,
	noProp 		VARCHAR(10)  NOT NULL,
	dateInscription DATE 	 NOT NULL,

	PRIMARY KEY(noAnimal, noClinique),
	FOREIGN KEY(noClinique) REFERENCES tp5_schema.Clinique(noClinique) ON DELETE CASCADE,
	FOREIGN KEY(noProp, noClinique) REFERENCES tp5_schema.Proprietaire(noProp, noClinique) ON DELETE CASCADE,
	CHECK (etat IN ('vivant', 'décédé'))
);

CREATE TABLE IF NOT EXISTS tp5_schema.Examen (
	noExamen 	VARCHAR(10)  NOT NULL,
	date        DATE 	 NOT NULL,
	heure		TIME  		NOT NULL,
	resultat	VARCHAR(20) NOT NULL,
	noVet 		VARCHAR(10)  NOT NULL,
	noAnimal    VARCHAR(10)  NOT NULL,
	noClinique  VARCHAR(10)  NOT NULL,

	PRIMARY KEY(noExamen),
	FOREIGN KEY(noAnimal, noClinique) REFERENCES tp5_schema.Animal(noAnimal, noClinique) ON DELETE CASCADE,
	FOREIGN KEY(noVet) REFERENCES tp5_schema.Veterinaire(noVet) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tp5_schema.Traitement (
	noTraitement  	VARCHAR(10)  NOT NULL,
	descTraitement  VARCHAR(30)	 NOT NULL,
	cout			NUMERIC(5,2) NOT NULL,

	PRIMARY KEY(noTraitement)
);

CREATE TABLE IF NOT EXISTS tp5_schema.TraitementEffectue (
	noExamen 	VARCHAR(10)  NOT NULL,
	noAnimal    VARCHAR(10)  NOT NULL,
	noTraitement  	VARCHAR(10)  NOT NULL,
	quantite    INTEGER  NOT NULL,
	dateDebut        DATE 	 NOT NULL,
	dateFin        DATE 	 NOT NULL,
	noClinique	VARCHAR(10)  NOT NULL,

	PRIMARY KEY(noExamen, noAnimal, noTraitement),
	FOREIGN KEY(noExamen) REFERENCES tp5_schema.Examen(noExamen) ON DELETE CASCADE,
	FOREIGN KEY(noAnimal, noClinique) REFERENCES tp5_schema.Animal(noAnimal, noClinique) ON DELETE CASCADE,
	FOREIGN KEY(noTraitement) REFERENCES tp5_schema.Traitement(noTraitement) ON DELETE CASCADE
);
`;
