import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Token } from "../models/token.model";

@Injectable({
  providedIn: "root",
})
export class TokensService {
  tokens: Observable<Token[]> = this.http.get<Token[]>("/creds/tokens");

  constructor(private http: HttpClient) {
  }

}
