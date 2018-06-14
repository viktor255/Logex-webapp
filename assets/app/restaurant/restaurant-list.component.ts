import { RestaurantModel } from "./restaurant.model";
import { Component, Input, OnInit } from "@angular/core";
import { RestaurantService } from "./restaurant.service";
import { ModalService } from "../modal/modal.service";

@Component ({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent{
    @Input() filteredRestaurants: RestaurantModel[];
    @Input() openFromOutside: boolean = false;
    showMap: boolean = false;

    constructor(private restaurantService: RestaurantService, private modalService: ModalService){
    }

    toggleMap(){
        this.showMap = true;
    }
    toggleTable(){
        this.showMap = false;
    }

    openModal(id){
        this.modalService.open(id);
        console.log('modal open' + id);
    }

    closeModal(id){
        this.modalService.close(id);
        console.log('modal open' + id);
    }


}