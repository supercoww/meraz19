import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	constructor() {}
	sidebar:HTMLElement = document.getElementById("sidebar");
	barWrapper:HTMLElement = document.getElementById("barWrapper");
	app_bar:HTMLElement = document.getElementsByClassName("app-bar")[0] as HTMLElement;
	toggleSidebar(){
		this.sidebar.classList.toggle("open");
		this.barWrapper.classList.toggle("open");
		this.app_bar.style.display = "flex";
	}
	ngOnInit() {}
}

// export function hideSidebar();
