import { Component, OnInit } from "@angular/core";
import { ParticlesModule } from "angular-particle";

@Component({
	selector: "app-hero",
	templateUrl: "./hero.component.html",
	styleUrls: ["./hero.component.scss", "./particles.scss"]
})
export class HeroComponent implements OnInit {
	myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

	constructor() {}
	showCoords(event:any) :void {
		console.log(event);
		var x = event.clientX;
		var y = event.clientY;
		var coords = "X coords: " + x + ", Y coords: " + y;
		console.log(coords);
	  }

	   polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
	  
		return {
		  x: centerX + (radius * Math.cos(angleInRadians)),
		  y: centerY + (radius * Math.sin(angleInRadians))
		};
	  }
	  
	  describeArc(x, y, radius, startAngle, endAngle){
	  
		  var start = this.polarToCartesian(x, y, radius, endAngle);
		  var end = this.polarToCartesian(x, y, radius, startAngle);
	  
		  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
	  
		  var d = [
			  "M", start.x, start.y, 
			  "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
		  ].join(" ");
	  
		  return d;       
	  }
	  
	ngOnInit() {
		document.getElementById("pathArc").setAttribute("d", this.describeArc(245, 205, 150, 0, 270));

		console.log("Trying to use ParticlesJS libray");
		this.myStyle = {
			position: "fixed",
			width: "100%",
			height: "100%",
			"z-index": -1,
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
				color: { value: "#fc0000" },
				shape: {
					type: "circle",
					stroke: { width: 0, color: "#fc1919" },
					polygon: { nb_sides: 3 },
					image: { src: "img/github.svg", width: 100, height: 100 }
				},
				opacity: {
					value: 0.5,
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
					color: "#ff0000",
					opacity: 0.4,
					width: 2
				},
				move: {
					enable: true,
					speed: 10,
					direction: "top-left",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: { enable: false, rotateX: 600, rotateY: 1200 }
				}
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: { enable: false, mode: "bubble" },
					onclick: { enable: false, mode: "repulse" },
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

		// window.particlesJS.load(
		// 	"particles-js",
		// 	"assets/particles.json",
		// 	function() {
		// 		console.log("callback - particles.js config loaded");
		// 	}
		// );

		// particlesJS.load("particles-js", "particlesjs-config.json", null);
	}
}
