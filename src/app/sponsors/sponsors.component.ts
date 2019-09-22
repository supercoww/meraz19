import { Component, OnInit } from '@angular/core';
import { SponsorInfo } from 'src/interfaces';

@Component({
	selector: 'app-sponsors',
	templateUrl: './sponsors.component.html',
	styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
	sponsors: SponsorInfo[] = [
		{
			imageUrl: 'https://i.postimg.cc/vT9dwrvF/logo-temp.png',
			link: 'https://www.onecompare.com/apple'
		},
		{
			imageUrl: 'https://i.postimg.cc/vT9dwrvF/logo-temp.png',
			link: 'https://www.onecompare.com/apple'
		},
		{
			imageUrl: 'https://i.postimg.cc/vT9dwrvF/logo-temp.png',
			link: 'https://www.onecompare.com/apple'
		}
	];

	constructor() {}

	ngOnInit() {}
}
