import { Component, Input } from "@angular/core";
import { RestaurantModel } from "./restaurant.model";

@Component({
    selector: 'app-restaurant-map',
    templateUrl: './restaurant-map.component.html',
    styles: [`
        agm-map {
            width: available;
            height: 60vh;
            display: block;
            margin: auto;
        }
    `]
})

export class RestaurantMapComponent {
// google maps zoom level
    zoom: number = 11;

    // initial center position for the map
    lat: number = 52.03858;
    lng: number = 4.995982;

    @Input() filteredRestaurants: RestaurantModel[];


    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    log(input) {
        console.log(input);
    }

    mapClicked($event: MouseEvent) {
        console.log(this.filteredRestaurants.length);
    }

    mapClickedd(input) {
        // console.log('Map is ready aasdfasdf');
        console.log(input);
    }


    toNumber(input) {
        console.log(Number(input));
        return Number(input);
    }
