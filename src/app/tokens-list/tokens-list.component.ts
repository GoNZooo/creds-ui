import { Component, OnInit } from "@angular/core";
import { TokensService } from "../services/tokens.service";

@Component({
  selector: "app-tokens-list",
  templateUrl: "./tokens-list.component.html",
  styleUrls: ["./tokens-list.component.css"],
})
export class TokensListComponent implements OnInit {

  constructor(public tokensService: TokensService) {
  }

  ngOnInit(): void {
  }

  deleteToken(id: string): void {
    this.tokensService.deleteToken(id).subscribe(() => {});
  }
}
