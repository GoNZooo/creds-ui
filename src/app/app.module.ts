import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersService } from "./services/users.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthorizationInterceptor } from "./interceptors/authorization.interceptor";
import { UsersListComponent } from "./users-list/users-list.component";
import { Routing } from "./routing";
import { UsersListEntryComponent } from "./users-list-entry/users-list-entry.component";
import { UserComponent } from "./user/user.component";
import { UserTokensComponent } from "./user-tokens/user-tokens.component";
import { TokensListComponent } from "./tokens-list/tokens-list.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CopyTextComponent } from "./copy-text/copy-text.component";
import { CommonModule } from "@angular/common";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { DeleteUserConfirmationComponent } from "./delete-user-confirmation/delete-user-confirmation.component";
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersListEntryComponent,
    UserComponent,
    UserTokensComponent,
    TokensListComponent,
    NewUserComponent,
    CopyTextComponent,
    DeleteUserConfirmationComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    MaterialModule,
  ],
  providers: [
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
    FormBuilder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
