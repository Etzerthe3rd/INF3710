import { Component } from "@angular/core";
import { CommunicationService } from "src/app/communication.service";
import { Animal } from "../../../../../common/tables/Animal";

@Component({
  selector: "app-search-animal",
  templateUrl: "./search-animal.component.html",
  styleUrls: ["./search-animal.component.css"]
})
export class SearchAnimalComponent  {

  public constructor(private communicationService: CommunicationService) { }

  public animals: Animal[];
  public getSearchedAnimals(nom: string): void {
    this.communicationService.getSearchedAnimals(nom).subscribe((animals: Animal[]) => {
        this.animals = animals;
        for(let i =0; i < animals.length; i++){
            console.log(animals[i].nom);
        }
    });
}



}
