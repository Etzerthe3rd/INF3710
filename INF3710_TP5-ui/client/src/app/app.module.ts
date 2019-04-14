import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AnimalComponent } from "./animal/animal.component";
import { InsertAnimalComponent } from "./animal/insert-animal/insert-animal.component";
import { SearchAnimalComponent } from "./animal/search-animal/search-animal.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { HotelComponent } from "./hotel/hotel.component";
import { RoomComponent } from "./room/room.component";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HotelComponent,
    AnimalComponent,
    InsertAnimalComponent,
    SearchAnimalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
