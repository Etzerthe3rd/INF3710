import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AnimalComponent } from "./animal/animal.component";
import { InsertAnimalComponent } from "./animal/insert-animal/insert-animal.component";
import { SearchAnimalComponent } from "./animal/search-animal/search-animal.component";
import { AppComponent } from "./app.component";
import { HotelComponent } from "./hotel/hotel.component";
import { RoomComponent } from "./room/room.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "room", component: RoomComponent },
  { path: "hotel", component: HotelComponent },
  { path: "animal", component: AnimalComponent},
  { path: "animal/insert", component: InsertAnimalComponent},
  { path: "animal/search", component: SearchAnimalComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
