import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, TopBarComponent, HeroComponent, TimerComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
