import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { Animal } from "../../../common/tables/Animal";
import {schema} from "../createSchema";
import {data} from "../populateDB";

@injectable()
export class DatabaseService {

    // A MODIFIER POUR VOTRE BD
    public connectionConfig: pg.ConnectionConfig = {
        user: "localhost",
        database: "postgres",
        password: "damg1998",
        port: 5432,
        host: "127.0.0.1",
        keepAlive : true
    };

    private pool: pg.Pool = new pg.Pool(this.connectionConfig);

    /*

        METHODES DE DEBUG
    */
    public createSchema(): Promise<pg.QueryResult> {
        this.pool.connect();

        return this.pool.query(schema);
    }

    public populateDb(): Promise<pg.QueryResult> {
        // this.pool.connect();

        return this.pool.query(data);
    }

    public getAllFromTable(tableName: string): Promise<pg.QueryResult> {
        // this.pool.connect();

        return this.pool.query(`SELECT * FROM HOTELDB.${tableName};`);
    }

    // ANIMAL
    public registerAnimal(animal: Animal): Promise<pg.QueryResult> {
        // this.pool.connect();
        const values: string[] = [
        animal.noAnimal,
        animal.noClinique,
        animal.nom,
        animal.type,
        animal.description,
        animal.DOB,
        animal.etat,
        animal.noProp,
        animal.dateInscription
        ];
        const queryText: string = `INSERT INTO tp5_schema.Animal VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9);`;

        return this.pool.query(queryText, values);
    }

    public updateAnimal(animal: Animal): Promise<pg.QueryResult> {
        // this.pool.connect();
        const values: string[] = [
            animal.noAnimal,
            animal.noClinique,
            animal.nom,
            animal.type,
            animal.description,
            animal.DOB,
            animal.etat,
            animal.noProp,
            animal.dateInscription
        ];
        const query: string = `UPDATE tp5_schema.Animal SET nom = $3, type = $4, description = $5,
        DOB = $6, etat = $7, noProp = $8 WHERE noAnimal = $1 AND noClinique = $2 ;`;

        return this.pool.query(query, values);
        }

    public deleteAnimal(animal: Animal ): Promise<pg.QueryResult> {
        // this.pool.connect();
        const values: string[] = [
            animal.nom
            ];
        const query: string = `DELETE FROM tp5_schema.Animal WHERE nom = $1;`;

        return this.pool.query(query, values);
    }

    public getAnimals(): Promise<pg.QueryResult> {
        // this.pool.connect();

        return this.pool.query(`SELECT * FROM tp5_schema.Animal;`);
    }

    public getSearchedAnimals(nom: string): Promise<pg.QueryResult> {
        // this.pool.connect();
        console.log("hallo");
        const value: string[] = [
            nom
        ];

        const query: string = `SELECT * FROM tp5_schema.Animal WHERE nom LIKE ('%' || $1 || '%')`;
        // query = query.concat('% ;');

        return this.pool.query(query, value);
    }

    // Proprietaire

    public getNoProps(): Promise<pg.QueryResult> {
        // this.pool.connect();

        return this.pool.query('SELECT noProp AS ProprietaireID FROM tp5_schema.Proprietaire;');
    }

}
