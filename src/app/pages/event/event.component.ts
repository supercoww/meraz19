import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventDataService } from 'src/app/core/event-data.service';
import { switchMap, mergeMap } from 'rxjs/operators';
import { EventInfo } from 'src/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
	eventObservable: Observable<EventInfo>;
	descriptionObservable: Observable<string>;

	constructor(
		private route: ActivatedRoute,
		private eventDataService: EventDataService,
		private http: HttpClient
	) {}

	ngOnInit() {
		this.eventObservable = this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
				this.eventDataService.getEvent(params.get('name'))
			)
		);

		this.descriptionObservable = this.eventObservable.pipe(
			mergeMap((event: EventInfo) =>
				this.http.get<string>(
					'assets/event-info/' + event.descriptionFile,
					{
						responseType: 'text' as 'json'
					}
				)
			)
		);

	}
}
