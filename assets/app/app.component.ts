import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "./restaurant/restaurant.service";
import { EventService } from "./event/event.service";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RestaurantService, EventService]
})
export class AppComponent{
    restaurants: boolean = true;
    toggleRestaurants(){
        this.restaurants = true;
    }
    toggleEvent(){
        this.restaurants = false;
    }
}