import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { UserCreationData } from "../models/user-creation-data.model";
import { ConfigurationService } from "./configuration.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UsersService implements OnDestroy {
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  private _token = "";
  private _subscriptions = new Subscription();
  private _usersSubscription = new Subscription();

  constructor(private configuration: ConfigurationService, private http: HttpClient) {
    this._subscriptions.add(this.configuration.token.subscribe(token => {
      this._token = token;

      this.loadUsers();
    }));

  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  newUser(userData: UserCreationData): Observable<string> {
    return this.http.post<string>("/creds/users", { adminToken: this._token, ...userData }).pipe(map((id) => {
      this.loadUsers();

      return id;
    }));
  }

  deleteUser(id: string): Observable<void> {
    return this.http.request<void>("delete", "/creds/users", { body: id }).pipe(map(() => {
      this.loadUsers();

      return;
    }));
  }

  loadUsers(): void {
    this._subscriptions.remove(this._usersSubscription);
    this._usersSubscription = this.http.get<User[]>("/creds/users").subscribe(users => {
        this.users.next(users);
      },
    );
    this._subscriptions.add(this._usersSubscription);
  }
}
