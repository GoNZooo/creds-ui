import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserComponent } from "./user/user.component";
import { UserTokensComponent } from "./user-tokens/user-tokens.component";
import { TokensListComponent } from "./tokens-list/tokens-list.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { HomeComponent } from "./home/home.component";

const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersListComponent },
  { path: "users/new", component: NewUserComponent },
  { path: "users/:id", component: UserComponent },
  { path: "users/:id/tokens", component: UserTokensComponent },
  { path: "tokens", component: TokensListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Routing {}
