import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
	myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

	constructor() {}



	ngOnInit() {
		// console.log('Trying to use ParticlesJS libray');
	}
}
