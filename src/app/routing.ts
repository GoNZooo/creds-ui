import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Route[] = [
  { path: "", children: [] },
  { path: "users", component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Routing {

}
