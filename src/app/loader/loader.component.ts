import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
	ringDisplay = 'none';
	loading = true;

	constructor() {}

	ngOnInit() {
		setTimeout(() => {
			this.ringDisplay = 'block';
			setTimeout(() => {
				this.loading = false;
			}, 1500);
		}, 1000);
	}
}
