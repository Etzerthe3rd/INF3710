import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as pg from "pg";

import { Animal } from "../../../common/tables/Animal";
// import { Proprietaire } from "../../../common/tables/Proprietaire";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
    public constructor(@inject(Types.DatabaseService) private databaseService: DatabaseService) { }

    public get router(): Router {
        const router: Router = Router();

        router.post("/createSchema",
                    (req: Request, res: Response, next: NextFunction) => {
                    this.databaseService.createSchema().then((result: pg.QueryResult) => {
                        console.log("CECI EST UNE FONCTION DE TEST SEULEMENT");
                        res.json(result);
                    }).catch((e: Error) => {
                        console.error(e.stack);
                    });
                });

        router.post("/populateDb",
                    (req: Request, res: Response, next: NextFunction) => {
                    this.databaseService.populateDb().then((result: pg.QueryResult) => {
                        console.log("CECI EST UNE FONCTION DE TEST SEULEMENT");
                        res.json(result);
                    }).catch((e: Error) => {
                        console.error(e.stack);
                    });
        });

        router.get("/tables/:tableName",
                   (req: Request, res: Response, next: NextFunction) => {
                this.databaseService.getAllFromTable(req.params.tableName)
                    .then((result: pg.QueryResult) => {
                        res.json(result.rows);
                    }).catch((e: Error) => {
                        console.error(e.stack);
                    });
        });

        router.get("/animal",
                   (req: Request, res: Response, next: NextFunction) => {
                    // Send the request to the service and send the response
                    this.databaseService.getAnimals().then((result: pg.QueryResult) => {
                    const animals: Animal[] = result.rows.map((ani: any) => (
                        {
                            noAnimal: ani.noAnimal,
                            noClinique: ani.noClinique,
                            nom: ani.nom,
                            type: ani.type,
                            description: ani.description,
                            DOB: ani.DOB,
                            etat: ani.etat,
                            noProp: ani.noProp,
                            dateInscription: ani.dateInscription
                    }));
                    for (let i = 0; i < animals.length; i++) {
                        console.log(animals[i]);
                    }
                    res.json(animals);
                }).catch((e: Error) => {
                    console.error(e.stack);
                });
        });

        router.get("/animal/searched",
                   (req: Request, res: Response, next: NextFunction) => {
                    // Send the request to the service and send the response
                    console.log(req.query.nom);

                    this.databaseService.getSearchedAnimals(req.query.nom).then((result: pg.QueryResult) => {
                    const animals: Animal[] = result.rows.map((ani: any) => (
                        {
                            noAnimal: ani.noAnimal,
                            noClinique: ani.noClinique,
                            nom: ani.nom,
                            type: ani.type,
                            description: ani.description,
                            DOB: ani.DOB,
                            etat: ani.etat,
                            noProp: ani.noProp,
                            dateInscription: ani.dateInscription
                    }));
                    res.json(animals);
                }).catch((e: Error) => {
                    console.error(e.stack);
                });
        });

        router.post("/animals/register",
                    (req: Request, res: Response, next: NextFunction) => {
                    const animal: Animal = {
                        noAnimal: req.body.noAnimal,
                        noClinique: req.body.noClinique,
                        nom: req.body.nom,
                        type: req.body.type,
                        description: req.body.description,
                        DOB: req.body.DOB,
                        etat: req.body.etat,
                        noProp: req.body.noProp,
                        dateInscription: req.body.dateInscription};
                    console.log(animal);

                    this.databaseService.registerAnimal(animal)
                    .then((result: pg.QueryResult) => {
                        res.json(result.rowCount);
                    })
                    .catch((e: Error) => {
                        console.error(e.stack);
                        res.json(-1);
                    });
        });

        router.post("/animals/update",
                    (req: Request, res: Response, next: NextFunction) => {
                    const animal: Animal = {
                        noAnimal: req.body.noAnimal,
                        noClinique: req.body.noClinique,
                        nom: req.body.nom,
                        type: req.body.type,
                        description: req.body.description,
                        DOB: req.body.DOB,
                        etat: req.body.etat,
                        noProp: req.body.noProp,
                        dateInscription: req.body.dateInscription};
                    console.log(animal);

                    this.databaseService.updateAnimal(animal)
                    .then((result: pg.QueryResult) => {
                        res.json(result.rowCount);
                    })
                    .catch((e: Error) => {
                        console.error(e.stack);
                        res.json(-1);
                    });
        });

        router.post("/animals/delete",
                    (req: Request, res: Response, next: NextFunction) => {
                    const animal: Animal = {
                        noAnimal: req.body.noAnimal,
                        noClinique: req.body.noClinique,
                        nom: req.body.nom,
                        type: req.body.type,
                        description: req.body.description,
                        DOB: req.body.DOB,
                        etat: req.body.etat,
                        noProp: req.body.noProp,
                        dateInscription: req.body.dateInscription};
                    console.log(animal);

                    this.databaseService.deleteAnimal(animal)
                    .then((result: pg.QueryResult) => {
                        res.json(result.rowCount);
                    })
                    .catch((e: Error) => {
                        console.error(e.stack);
                        res.json(-1);
                    });
        });

        router.get("/proprietaire",
                   (req: Request, res: Response, next: NextFunction) => {
           this.databaseService.getNoProps().then((result: pg.QueryResult) => {
             const propPKs: string[] = result.rows.map((row: any) => row.noProp);
             console.log(propPKs);
             res.json(propPKs);
           }).catch((e: Error) => {
             console.error(e.stack);
         });
       });

        return router;
    }
}
