import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  constructor(public usersService: UsersService, public router: Router) {}

  ngOnInit(): void {}
}
