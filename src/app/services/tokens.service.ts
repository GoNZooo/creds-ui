import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Token } from "../models/token.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TokensService implements OnDestroy {
  tokens: BehaviorSubject<Token[]> = new BehaviorSubject<Token[]>([]);

  private _subscriptions = new Subscription();
  private _tokensSubscription = new Subscription();

  constructor(private http: HttpClient) {
    this.loadTokens();
  }

  deleteToken(id: string): Observable<void> {
    return this.http.request("delete", "/creds/tokens", { body: id }).pipe(map(() => {
      this.loadTokens();
    }));
  }

  loadTokens(): void {
    this._subscriptions.remove(this._tokensSubscription);
    this._tokensSubscription = this.http.get<Token[]>("/creds/tokens").subscribe((tokens) => {
      this.tokens.next(tokens);
    });
    this._subscriptions.add(this._tokensSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
