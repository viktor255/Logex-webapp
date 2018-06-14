import { Component } from "@angular/core";
import { ModalService } from "../modal/modal.service";
import { RestaurantService } from "./restaurant.service";
import { RestaurantModel } from "./restaurant.model";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
})

export class RestaurantsComponent{

    restaurants: RestaurantModel[] = [];
    filteredRestaurants: RestaurantModel[] = [];
    inputName: string;
    inputPostCode: string;
    inputYear: string;

    showMap: boolean = false;

    dropdownList = [];
    cities = [];
    citiesData = [];
    selectedItems = [];
    dropdownSettings = {};

    constructor(private restaurantService: RestaurantService, private modalService: ModalService){
    }

    reset(){
        this.filteredRestaurants = this.restaurants;
        this.cityFilter();
        this.inputName = '';
        this.inputPostCode = '';
        this.inputYear = '';
    }

    toggleMap(){
        this.showMap = true;
    }
    toggleTable(){
        this.showMap = false;
    }

    filter(){
        // reset

        this.cityFilter();
        if(this.selectedItems.length === 0)
            this.filteredRestaurants = this.restaurants;

        // filter all three
        if(this.inputYear) {
            this.filteredRestaurants = this.filteredRestaurants.filter(
                word =>
                    (word.name.match(this.inputName) !== null) &&
                    (word.postCode.match(this.inputPostCode) !== null) &&
                    (word.startYear >= this.inputYear));
        }
        else {
            this.filteredRestaurants = this.filteredRestaurants.filter(
                word =>
                    (word.name.match(this.inputName) !== null) &&
                    (word.postCode.match(this.inputPostCode) !== null));
        }
    }

    cityFilter(){
        this.filteredRestaurants = [];
        for(let a of this.selectedItems){
            this.filteredRestaurants = this.filteredRestaurants.concat(
                this.restaurants.filter(word => (word.city === a.item_text)));
        }
    }

    onItemSelect(item:any){
        this.cityFilter();
        // console.log(item);
    }
    onDeSelect(item:any){
        this.cityFilter();
        // console.log(item);
    }
    onSelectAll(items: any){
        this.filteredRestaurants = this.restaurants;
    }
    onDeSelectAll(items: any){
        this.filteredRestaurants = [];
    }

    fillCities(){
        for(let restaurant of this.restaurants){
            if(this.cities.indexOf(restaurant.city) == -1) {
                this.cities.push(restaurant.city);
            }
        }
        let counter = 0;
        for(let city of this.cities){
            this.citiesData.push(
                {item_id: counter, item_text: city}
            );
            counter++;

        }
        this.selectedItems = this.citiesData;
        // console.log(this.cities);
        // console.log(this.citiesData);
    }

    ngOnInit(){
        this.restaurantService.getRestaurants()
            .subscribe((restaurants: RestaurantModel[]) => {
                this.restaurants = restaurants;
                this.filteredRestaurants = restaurants;
                this.fillCities();
            });

        this.dropdownSettings = {
            singleSelection: false,
            enableCheckAll: true,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }

}