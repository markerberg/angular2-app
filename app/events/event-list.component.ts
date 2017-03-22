import { Component, OnInit } from 'angular2/core';
import { IEvent } from './event';
import { EventFilterPipe } from './event-filter.pipe';
import { ThumbComponent } from '../shared/thumb.component';
import { EventService } from './event.service';


@Component ({
    selector: 'el-events',
    templateUrl: 'app/events/event-list.component.html',
    styleUrls: ['app/events/event-list.component.css'],
    pipes: [EventFilterPipe],
    directives: [ThumbComponent]//to use thumb component in template after we import it
})

export class EventListComponent implements OnInit{
    pageTitle: string = 'Event List App';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    searchCriteria: string;
    events: IEvent[];
    
    constructor(private _eventService: EventService) { // use constructor for our service 
        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage; //set it to the opposite of what it currently is
    }
    
    ngOnInit(): void {
        this.events = this._eventService.getEvents(); // we bring in the events on the onInit
    }
    
    onRatingClicked(message : string) : void {
        this.pageTitle = 'Event List ' + message;
    }
}
