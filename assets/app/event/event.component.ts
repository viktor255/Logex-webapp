import { Component, Input } from "@angular/core";
import { EventModel } from "./event.model";
import { ModalService } from "../modal/modal.service";
import { EventService } from "./event.service";
import { RestaurantModel } from "../restaurant/restaurant.model";

@Component({
    selector: '[app-event]',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css'],

})
export class EventComponent {
    @Input() event: EventModel;
    @Input() openFromOutside: boolean = false;
    clicked = false;
    restaurantsInArea: RestaurantModel[] = [];

    constructor(private eventService: EventService, private modalService: ModalService) {

    }

    haversineDistance(latA,lngA, latB, lngB) {
        const toRad = x => (x * Math.PI) / 180;
        const R = 6371; // km

        const dLat = toRad(lngB - lngA);
        const dLatSin = Math.sin(dLat / 2);
        const dLon = toRad(latB - latA);
        const dLonSin = Math.sin(dLon / 2);

        const a = (dLatSin * dLatSin) +
            (Math.cos(toRad(lngA)) * Math.cos(toRad(lngB)) * dLonSin * dLonSin);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // console.log('Haversine dis: ' + R*c);
        return R * c;
    }
    
    sortRestaurants(){
        this.restaurantsInArea.sort((a,b) => {
            if(a.distance <= b.distance)
                return -1;
            else return 1;
        });
    }

    getRestaurants() {
        this.eventService.getRestaurants()
            .subscribe((restaurants: RestaurantModel[]) => {
                this.restaurantsInArea = [];
                for(let res of restaurants){
                    const haverDist = this.haversineDistance(res.latitude, res.longitude, this.event.latitude, this.event.longitude);
                    if( haverDist <= 0.5) {
                        res.distance = haverDist;
                        this.restaurantsInArea.push(res);
                    }
                }
                this.sortRestaurants();
                // console.log('Restaurants in area ');
                // console.log(this.restaurantsInArea);
            });

    }

    openModal(id) {
        this.clicked = true;
        this.modalService.open(id);
        console.log('modal open' + id);
        this.getRestaurants();
    }

    closeModal(id) {
        this.modalService.close(id);
        console.log('modal open' + id);
    }
}