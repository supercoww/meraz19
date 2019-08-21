import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	bgColor: string;
	fgColor: string;
	transparent: boolean;

	constructor(private router: Router) {
		router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => {
				this.transparent = event.urlAfterRedirects === '/';
				window.dispatchEvent(new CustomEvent('scroll'));
			});
	}

	ngOnInit() {
		window.addEventListener('scroll', (event: Event) => {
			if (window.scrollY > 56 || !this.transparent) {
				this.bgColor = 'white';
				this.fgColor = 'black';
			} else {
				this.bgColor = 'rgba(0,0,0,0)';
				this.fgColor = 'white';
			}
		});
	}
}
