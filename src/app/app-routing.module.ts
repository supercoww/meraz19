import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventComponent } from './pages/event/event.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoneComponent } from './pages/done/done.component';
const routes: Routes = [
	// {
	// 	path: 'register',
	// 	component: RegisterFormComponent,
	// 	data: { animation: 'register' }
	// },
	{
		path: 'contact',
		component: ContactComponent,
		data: { animation: 'contact' }
	},
	{
		path: 'events',
		component: EventListComponent,
		data: { animation: 'events' }
	},
	{
		path: 'events/:name',
		component: EventComponent,
		data: { animation: 'event-info' }
	},
	{
		path: 'done/:status',
		component: DoneComponent,
		data: { animation: 'event-info' }
	},
	{ path: '', component: HomeComponent, data: { animation: 'home' } },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
