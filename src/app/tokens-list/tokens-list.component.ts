import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-tokens-list",
  templateUrl: "./tokens-list.component.html",
  styleUrls: ["./tokens-list.component.css"],
})
export class TokensListComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}

  deleteToken(id: string): void {
    this.usersService.deleteToken(id).subscribe(() => {});
  }
}
