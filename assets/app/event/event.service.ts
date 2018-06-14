import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { EventModel } from "./event.model";
import { RestaurantService } from "../restaurant/restaurant.service";
import { RestaurantModel } from "../restaurant/restaurant.model";


const urlLink = 'http://localhost:3000/';

@Injectable()
export class EventService {
    events: EventModel[] = [];

    constructor(private httpClient: HttpClient) {
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
                return transformedRestaurants;
            })
    }

    getEvents() {
        return this.httpClient.get<EventModel[]>(urlLink + 'event')
            .map((data: any) => {
                //console.log(messages);
                const transformedEvents: EventModel[] = [];
                for (const event of data.obj) {
                    let dates = event.dates.singles;
                    let startYear;
                    let startMonth;
                    if (dates) {
                        startYear = dates[0].substr(6, 4);
                        startMonth = dates[0].substr(3, 2);
                    }
                    if (startYear) {
                        startYear = Number(startYear);
                        startMonth = Number(startMonth)
                    } else {
                        startYear = 0;
                        startMonth = 0;
                    }
                    transformedEvents.push(new EventModel(
                        event.title,
                        event.location.city,
                        event.location.zipcode,
                        event.location.adress,
                        event.location,
                        Number((event.location.latitude).replace(',', '.')),
                        Number((event.location.longitude).replace(',', '.')),
                        event.urls,
                        event.media,
                        startYear,
                        startMonth,
                        -1
                    );
                }
                this.events = transformedEvents;
                return transformedEvents;
            })
    }


}
