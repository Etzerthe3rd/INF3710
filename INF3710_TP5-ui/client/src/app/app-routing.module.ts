import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AnimalComponent } from "./animal/animal.component";
import { InsertAnimalComponent } from "./animal/insert-animal/insert-animal.component";
import { SearchAnimalComponent } from "./animal/search-animal/search-animal.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "animal", component: AnimalComponent},
  { path: "animal/insert", component: InsertAnimalComponent},
  { path: "animal/search", component: SearchAnimalComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
