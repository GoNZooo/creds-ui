import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersService } from "./services/users.service";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthorizationInterceptor } from "./interceptors/authorization.interceptor";
import { UsersListComponent } from "./users-list/users-list.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UsersService, { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
