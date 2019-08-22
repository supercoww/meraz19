import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category, EventInfo } from 'src/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class EventDataService {
	baseUrl = 'assets/';
	constructor(private http: HttpClient) {}

	getAllEvents(): Observable<Category[]> {
		return this.http.get<Category[]>(this.baseUrl + 'events.json');
	}

	getEvent(name: string): Observable<EventInfo> {
		return this.http.get<Category[]>(this.baseUrl + 'events.json').pipe(
			map(categories => {
				let evt: EventInfo = null;
				categories.forEach(category => {
					category.events.forEach(event => {
						if (event.name.toLowerCase() === name.toLowerCase()) {
							evt = event;
						}
					});
				});
				return evt;
			})
		);
	}
}
