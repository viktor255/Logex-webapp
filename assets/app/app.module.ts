import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { RestaurantListComponent } from "./restaurant/restaurant-list.component";
import { RestaurantsComponent } from "./restaurant/restaurants.component";
import { ModalService } from "./modal/modal.service";
import { ModalComponent } from "./modal/modal.component";
import { RestaurantDetailComponent } from "./restaurant/restaurant-detail.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        RestaurantComponent,
        RestaurantListComponent,
        RestaurantsComponent,
        RestaurantDetailComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    providers:[ModalService],
    bootstrap: [AppComponent]
})
export class AppModule {

}