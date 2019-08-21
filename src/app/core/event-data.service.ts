import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EventDataService {
	baseUrl = 'assets/';
	constructor(private http: HttpClient) {}

	getAllEvents(): Observable<any[]> {
		return this.http.get<any[]>(this.baseUrl + 'events.json');
	}
}
