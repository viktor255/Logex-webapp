import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "./restaurant/restaurant.service";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RestaurantService]
})
export class AppComponent{
}