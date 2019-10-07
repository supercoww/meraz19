import { Component, OnInit, AfterViewInit } from '@angular/core';
import { slideIn } from './route-animations';
import { RouterOutlet } from '@angular/router';

import { ParticlesModule } from 'angular-particle';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [slideIn]
})
export class AppComponent implements OnInit {
	myStyle: object = {};
	myParams: object = {};
	width = 100;
	height = 100;

	prepareRoute(outlet: RouterOutlet) {
		return (
			outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData.animation
		);
	}

	ngOnInit(): void {
		// Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		// Add 'implements OnInit' to the class.

		this.myStyle = {
			position: 'fixed',
			width: '100%',
			height: '100%',
			'z-index': -1,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0
		};
		this.myParams = {
			particles: {
				number: {
					value: 400,
					density: { enable: true, value_area: 3000 }
				},
				color: { value: '#fc0000' },
				shape: {
					type: 'circle',
					stroke: { width: 0, color: '#fc1919' },
					polygon: { nb_sides: 3 },
					image: { src: 'img/github.svg', width: 100, height: 100 }
				},
				opacity: {
					value: 0.7,
					random: true,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false
					}
				},
				size: {
					value: 3,
					random: true,
					anim: { enable: true, speed: 5, size_min: 31, sync: false }
				},
				line_linked: {
					enable: false,
					distance: 500,
					color: '#ff0000',
					opacity: 0.4,
					width: 2
				},
				move: {
					enable: true,
					speed: 6.5,
					direction: 'top-left',
					random: true,
					straight: false,
					out_mode: 'out',
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 }
				}
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: { enable: false, mode: 'bubble' },
					onclick: { enable: false, mode: 'repulse' },
					resize: true
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 0.5 } },
					bubble: {
						distance: 400,
						size: 4,
						duration: 0.3,
						opacity: 1,
						speed: 3
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 }
				}
			},
			retina_detect: true
		};
	}
}
