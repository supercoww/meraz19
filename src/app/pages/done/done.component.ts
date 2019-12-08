import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-done',
	templateUrl: './done.component.html',
	styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
	status: string;
	private sub: any;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.status = params['status'];
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
