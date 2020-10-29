import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  users: Observable<User[]> = this.http.get<User[]>("/creds/users");
}
