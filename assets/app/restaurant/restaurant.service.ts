import { RestaurantModel } from "./restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { EventService } from "../event/event.service";


const urlLink = 'http://localhost:3000/';

@Injectable()
export class RestaurantService{
    restaurants: RestaurantModel[] = [];

    constructor(private httpClient: HttpClient, private eventService: EventService){}

    getEvents(){
        return this.eventService.getEvents();
    }

    getRestaurants() {
        return this.httpClient.get<RestaurantModel[]>(urlLink + 'restaurant')
            .map( (data: any) => {
                //console.log(messages);
                const transformedRestaurants: RestaurantModel[] = [];
                for (const restaurant of data.obj) {
                    let startYear = restaurant.dates.startdate;
                    if(startYear)
                        startYear = startYear.substr(6,4);
                    transformedRestaurants.push(new RestaurantModel(
                        restaurant.title,
                        restaurant.location.city,
                        restaurant.location.zipcode,
                        restaurant.location.adress,
                        restaurant.location,
                        Number((restaurant.location.latitude).replace(',','.')),
                        Number((restaurant.location.longitude).replace(',','.')),
                        restaurant.urls,
                        restaurant.media,
                        startYear,
                        -1
                    );
                }
                this.restaurants = transformedRestaurants;
                return transformedRestaurants;
            })
    }
}
