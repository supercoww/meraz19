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
	transparent = true;
	shadow: string;

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
				this.bgColor = 'black';
				this.shadow =
					'0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)';
			} else {
				this.bgColor = 'rgba(0,0,0,0)';
				this.shadow = 'none';
			}
		});

		window.dispatchEvent(new CustomEvent('scroll'));
	}
}
