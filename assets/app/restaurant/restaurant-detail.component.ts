import { Component, Input } from "@angular/core";
import { RestaurantModel } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Component({
    selector: 'app-restaurant-detail',
    templateUrl: './restaurant-detail.component.html'

})
export class RestaurantDetailComponent {
    @Input() restaurant: RestaurantModel;


}