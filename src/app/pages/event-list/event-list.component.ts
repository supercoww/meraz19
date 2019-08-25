import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/core/event-data.service';
import { Category } from 'src/interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-event-list',
	templateUrl: './event-list.component.html',
	styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
	categories$: Observable<Category[]>;

	constructor(private eventDataService: EventDataService) {}

	ngOnInit() {
		this.categories$ = this.eventDataService.getAllEvents();
	}
}
