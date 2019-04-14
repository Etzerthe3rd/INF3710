import { Employe } from "./Employe";

export interface Veterinaire extends Employe{
    "noVet": string;
    "enService": boolean;
}