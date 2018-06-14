import { Component, Input } from "@angular/core";
import { RestaurantModel } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";
import { ModalService } from "../modal/modal.service";
import { EventModel } from "../event/event.model";

@Component({
    selector: '[app-restaurant]',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css'],

})
export class RestaurantComponent {
    @Input() restaurant: RestaurantModel;
    @Input() openFromOutside: boolean = false;
    clicked = false;
    eventsInArea: EventModel[] = [];

    constructor(private restaurantService: RestaurantService, private modalService: ModalService){
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

    sortEvents(){
        this.eventsInArea.sort((a,b) => {
            if(a.distance <= b.distance)
                return -1;
            else return 1;
        });
    }

    getEvents() {
        this.restaurantService.getEvents()
            .subscribe((events: EventModel[]) => {
                this.eventsInArea = [];
                for(let event of events){
                    const haverDist = this.haversineDistance(event.latitude, event.longitude, this.restaurant.latitude, this.restaurant.longitude);
                    if( haverDist <= 0.5) {
                        event.distance = haverDist;
                        this.eventsInArea.push(event);
                    }
                }
                this.sortEvents();
                // console.log('Restaurants in area ');
                // console.log(this.eventsInArea);
            });
    }

    openModal(id){
        this.clicked = true;
        this.modalService.open(id);
        this.getEvents();
        // console.log('modal open' + id);
    }

    closeModal(id){
        this.modalService.close(id);
        // console.log('modal open' + id);
    }
}