export interface Employe{
    "noPersonnel": string;
    "noClinique": string;
    "nom": string;
    "adresse": string;
    "noTel": string;
    "DOB": string;
    "sexe": Sexe;
    "NAS": string;
    "fonction": Fonction;
    "salaire": number;
}

export enum Fonction{
    Veterinaire = "Vétérinaire",
    Infirmiere = "Infirmière",
    Gestionnaire = "Gestionnaire",
    Secretaire = "Secrétaire",
    Entretien = "Entretien"
}

export enum Sexe{
    Male = "M",
    Femelle = "F"
}