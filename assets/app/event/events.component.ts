import { Component, Input, OnInit } from "@angular/core";
import { ModalService } from "../modal/modal.service";
import { EventModel } from "./event.model";
import { EventService } from "./event.service";

@Component ({
    selector: 'app-events',
    templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit{
    events: EventModel[] = [];
    @Input() filteredEvents: EventModel[] = [];
    inputName: string;
    inputMonth: number = 0;
    inputYear: number = 0;

    constructor(private eventService: EventService, private modalService: ModalService){

    }

    reset(){
        this.filteredEvents = this.events;
        this.inputName = '';
        this.inputMonth = 0;
        this.inputYear = 0;
    }


    filter(){
        // reset
        this.filteredEvents = this.events;

        // filter all three
        if(1) {
            this.filteredEvents = this.filteredEvents.filter(
                word =>
                    (word.name.match(this.inputName) !== null) &&
                    (word.startMonth >= (this.inputMonth)) &&
                    (word.startYear >= this.inputYear));
        }
        else {
            this.filteredEvents = this.filteredEvents.filter(
                word =>
                    (word.name.match(this.inputName) !== null));
        }
    }

    openModal(id){
        this.modalService.open(id);
        console.log('modal open' + id);
    }

    closeModal(id){
        this.modalService.close(id);
        console.log('modal open' + id);
    }

    ngOnInit(){

        this.eventService.getEvents()
            .subscribe((events: EventModel[]) => {
                this.events = events;
                this.filteredEvents = events;
                // console.log(this.events);
            });

    }

}