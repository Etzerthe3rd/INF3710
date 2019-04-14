import { Component, OnInit } from "@angular/core";
import { Animal } from "../../../../common/tables/Animal";
// import { Proprietaire } from "../../../../common/tables/Proprietaire";
import { CommunicationService } from "./../communication.service";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.css"]
})
export class AnimalComponent implements OnInit {

  public constructor(private communicationService: CommunicationService) { }

  public duplicateError: boolean = false;

  public props: string[];

  public ngOnInit(): void {
        this.getProprietaires();
}


  public insertAnimal(noAnimal: string, noClinique: string, nom: string, type: string, description: string,
                      DOB: string, etat: string, noProp: string, dateInscription: string): void {
    const animal: Animal = {
      noAnimal: noAnimal,
      noClinique: noClinique,
      nom: nom,
      type: type,
      description: description,
      DOB: DOB,
      etat: etat,
      noProp: noProp,
      dateInscription: dateInscription
    };
    this.communicationService.insertAnimal(animal).subscribe((res: number) => {
        if (res > 0) {
            this.communicationService.filter("update");
        }
        this.duplicateError = (res === -1);
    });
  }

  public deleteAnimal(animal: Animal): void {
    this.communicationService.deleteAnimal(animal).subscribe((res: number) => {
        if (res > 0) {
            this.communicationService.filter("update");
        }
        this.duplicateError = (res === -1);
    });
  }

  public getProprietaires(): void {
    this.communicationService.getProprietaires().subscribe((props: string[]) => {
        this.props = props;
        console.log(this.props);
    });
}

  

}
