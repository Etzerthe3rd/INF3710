import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concat, of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Animal } from "../../../common/tables/Animal";

@Injectable()
export class CommunicationService {

    private readonly BASE_URL: string = "http://localhost:3000/database";
    public constructor(private http: HttpClient) { }

    private _listners: any = new Subject<any>();

    public listen(): Observable<any> {
       return this._listners.asObservable();
    }

    public filter(filterBy: string): void {
       this._listners.next(filterBy);
    }


    public getAnimals(): Observable<any[]> {

        return this.http.get<Animal[]>(this.BASE_URL + "/animal").pipe(
            catchError(this.handleError<Animal[]>("getAnimals")),
        );
    }

    public getSearchedAnimals(nom: string): Observable<any[]> {
        const params: HttpParams = new HttpParams().set("nom", nom);
        // params.append("nom", nom);

        return this.http.get<Animal[]>(this.BASE_URL + "/animal/searched", {params: params}).pipe(
            catchError(this.handleError<Animal[]>("getSearchedAnimals")),
        );
    }

    public insertAnimal(animal: Animal): Observable<number> {
        return this.http.post<number>(this.BASE_URL + "/animals/register", animal).pipe(
            catchError(this.handleError<number>("insertAnimal")),
        );
    }

    public updateAnimal(animal: Animal): Observable<number> {
        return this.http.post<number>(this.BASE_URL + "/animals/update", animal).pipe(
            catchError(this.handleError<number>("insertAnimal")),
        );
    }

    public deleteAnimal(animal: Animal): Observable<number> {
        return this.http.post<number>(this.BASE_URL + "/animals/delete", animal).pipe(
            catchError(this.handleError<number>("deleteAnimal")),
        );
    }

    public getProprietaires(): Observable<string[]> {

        return this.http.get<string[]>(this.BASE_URL + "/proprietaire").pipe(
            catchError(this.handleError<string[]>("getProprietaires")),
        );
    }

    public setUpDatabase(): Observable<any> {
        return concat(this.http.post<any>(this.BASE_URL + "/createSchema", []),
                      this.http.post<any>(this.BASE_URL + "/populateDb", []));
    }

    private handleError<T>(request: string, result?: T): (error: Error) => Observable<T> {

        return (error: Error): Observable<T> => {
            return of(result as T);
        };
    }
}
