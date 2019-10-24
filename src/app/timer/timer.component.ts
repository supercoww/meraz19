import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Time } from '../../interfaces';

const END_TIME: number = new Date('Nov 8, 2019 00:00:00').getTime(); // End time of timer
const TIMER_INTERVAL = 1000;

@Component({
	selector: 'app-timer',
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
	remainingTimeSubject: BehaviorSubject<Time>;
	interval: number;
	complete = false;

	constructor() {
		this.remainingTimeSubject = new BehaviorSubject(this.timeLeft);
	}

	ngOnInit() {
		this.interval = window.setInterval(() => {
			const timeLeft = this.timeLeft;
			this.remainingTimeSubject.next(timeLeft);
		}, TIMER_INTERVAL);
	}

	public get timeLeft(): Time {
		const totalSeconds = END_TIME - Date.now();
		if (totalSeconds <= 0) {
			window.clearInterval(this.interval);
			this.complete = true;
			if (this.remainingTimeSubject) {
				this.remainingTimeSubject.complete();
			}
		}
		return {
			days: Math.floor(totalSeconds / (1000 * 60 * 60 * 24)),
			hours: Math.floor(
				(totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			),
			minutes: Math.floor(
				(totalSeconds % (1000 * 60 * 60)) / (1000 * 60)
			),
			seconds: Math.floor((totalSeconds % (1000 * 60)) / 1000)
		};
	}
}
