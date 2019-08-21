import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/core/event-data.service';

@Component({
	selector: 'app-event-list',
	templateUrl: './event-list.component.html',
	styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
	categories: any[];
	constructor(private eventDataService: EventDataService) {}

	ngOnInit() {
		this.getAllEvents();
	}

	getAllEvents() {
		this.eventDataService.getAllEvents().subscribe(categories => (this.categories = categories));
	}
}
