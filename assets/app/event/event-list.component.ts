import { Component, Input, OnInit } from "@angular/core";
import { ModalService } from "../modal/modal.service";
import { EventModel } from "./event.model";
import { EventService } from "./event.service";

@Component ({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html'
})
export class EventListComponent{
    @Input() filteredEvents: EventModel[];
    @Input() openFromOutside: boolean = false;

    constructor(private eventService: EventService, private modalService: ModalService){

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