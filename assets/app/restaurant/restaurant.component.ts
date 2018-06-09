import { Component, Input } from "@angular/core";
import { RestaurantModel } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";
import { ModalService } from "../modal/modal.service";

@Component({
    selector: '[app-restaurant]',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css'],

})
export class RestaurantComponent {
    @Input() restaurant: RestaurantModel;
    clicked = false;

    constructor(private restaurantService: RestaurantService, private modalService: ModalService){

    }

    openModal(id){
        this.clicked = true;
        this.modalService.open(id);
        console.log('modal open' + id);
    }

    closeModal(id){
        this.modalService.close(id);
        console.log('modal open' + id);
    }
}