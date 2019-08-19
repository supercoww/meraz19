import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	bgColor: string;

	constructor() {}

	ngOnInit() {
		window.addEventListener('scroll', (event: Event) => {
			if (window.scrollY > 56) {
				this.bgColor = 'rgba(0,0,0,0.8)';
			} else {
				this.bgColor = 'rgba(0,0,0,0)';
			}
		});
	}
}
