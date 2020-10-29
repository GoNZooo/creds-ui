import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { ActivatedRoute } from "@angular/router";
import { Token } from "../models/token.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-tokens",
  templateUrl: "./user-tokens.component.html",
  styleUrls: ["./user-tokens.component.css"],
})
export class UserTokensComponent implements OnInit, OnDestroy {
  id = "";
  tokens: Token[] | null = null;
  private _subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this._subscriptions.add(this.route.params.subscribe(parameters => {
      if (parameters.id !== undefined) {
        this.id = parameters.id;
      }
    }));

    if (this.id !== "") {
      this._subscriptions.add(this.usersService.users.subscribe(users => {
        const foundUser = users.find(({id}) => id === this.id);
        if (foundUser !== undefined) {
          this.tokens = foundUser.tokens;
        }
      }));
    }
  }

  ngOnDestroy(): void {
  }

}
