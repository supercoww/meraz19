import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TimerComponent } from './timer/timer.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventComponent } from './pages/event/event.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { LoaderComponent } from './loader/loader.component';
import { DoneComponent } from './pages/done/done.component';

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
		SidebarComponent,
		RegisterFormComponent,
		ContactComponent,
		SponsorsComponent,
		LoaderComponent,
		DoneComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		ParticlesModule,
		NoopAnimationsModule,
		MatButtonModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
