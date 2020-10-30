import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { User } from "../models/user.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id = "";
  user: User | null = null;

  constructor(private route: ActivatedRoute, usersService: UsersService) {
    this.route.params.subscribe((params) => {
      if (params.id !== undefined) {
        this.id = params.id;
      }
    });
    if (this.id !== "") {
      usersService.users.subscribe((users) => {
        const found = users.find((u) => u.id === this.id);
        if (found !== undefined) {
          this.user = found;
        }
      });
    }
  }

  ngOnInit(): void {}
}
