import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Observable, Subscription } from "rxjs";
import { UserCreationData } from "../models/user-creation-data.model";
import { ConfigurationService } from "./configuration.service";

@Injectable({
  providedIn: "root",
})
export class UsersService implements OnDestroy {
  users: Observable<User[]> = this.http.get<User[]>("/creds/users");

  private _token = "";
  private _subscriptions = new Subscription();

  constructor(private configuration: ConfigurationService, private http: HttpClient) {
    this._subscriptions.add(this.configuration.token.subscribe(token => {
      this._token = token;
    }));
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  newUser(userData: UserCreationData): Observable<string> {
    return this.http.post<string>("/creds/users", { adminToken: this._token, ...userData });
  }
}
