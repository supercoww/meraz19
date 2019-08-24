import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventDataService } from 'src/app/core/event-data.service';
import { switchMap } from 'rxjs/operators';
import { EventInfo } from 'src/interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
	eventObservable: Observable<EventInfo>;

	constructor(private route: ActivatedRoute, private eventDataService: EventDataService) {}

	ngOnInit() {
		this.eventObservable = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => this.eventDataService.getEvent(params.get('name')))
		);

		this.eventObservable.subscribe(data => {
			console.log(data);
		});
	}
}
