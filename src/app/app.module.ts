import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HeroComponent } from "./hero/hero.component";
import { TimerComponent } from "./timer/timer.component";
import { FooterComponent } from "./footer/footer.component";
import { EventListComponent } from "./pages/event-list/event-list.component";
import { CoreModule } from "./core/core.module";
import { ParticlesModule } from "angular-particle";
import { EventComponent } from './pages/event/event.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TopBarComponent,
		HeroComponent,
		TimerComponent,
		FooterComponent,
		EventListComponent,
		EventComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		HttpClientModule,
		AppRoutingModule,
		ParticlesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
