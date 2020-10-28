import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { Injectable, OnDestroy } from "@angular/core";
import { ConfigurationService } from "../services/configuration.service";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor, OnDestroy {
  private _token = "";
  private _subscriptions = new Subscription();

  constructor(private configuration: ConfigurationService) {
    this._subscriptions.add(configuration.token.subscribe(token => this._token = token));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${this._token}`).set("Content-type", "application/json"),
      withCredentials: true,
    });

    return next.handle(clone);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
