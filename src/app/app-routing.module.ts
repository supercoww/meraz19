import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { EventListComponent } from "./pages/event-list/event-list.component";
import { EventComponent } from "./pages/event/event.component";
import { RegisterFormComponent } from "./pages/register-form/register-form.component";

const routes: Routes = [
	{ path: "register", component: RegisterFormComponent },
	{ path: "events", component: EventListComponent },
	{ path: "events/:name", component: EventComponent },
	{ path: "", component: HomeComponent },
	{ path: "**", redirectTo: "" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
