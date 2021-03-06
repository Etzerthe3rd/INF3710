import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Animal } from "../../../common/tables/Animal";
import { CommunicationService } from "./communication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    public route: string;

    public constructor(private communicationService: CommunicationService, location: Location, router: Router) {
        router.events.subscribe((val) => {
            if (location.path() !== "") {
              this.route = location.path();
            } else {
              this.route = "";
            }
          });
    }

    public readonly title: string = "VetoSansFrontieres";
    public animals: Animal[];
    public ngOnInit(): void {
        this.communicationService.listen().subscribe((m:any) => {
            console.log(m);
            this.getAnimals();
        });
    }


    public getAnimals(): void {
        this.communicationService.getAnimals().subscribe((animals: Animal[]) => {
            this.animals = animals;
            for(let i =0; i < animals.length; i++){
                console.log(animals[i].nom);
            }
        });
    }

    public deleteAnimal(animal: Animal): void {
        this.communicationService.deleteAnimal(animal).subscribe(() => {
            console.log("animal has been deleted");
            this.getAnimals();
        });
    }

    public createDB(): void {
        this.communicationService.setUpDatabase().subscribe((res: any) => {
            console.log(res);
        });
    }
}