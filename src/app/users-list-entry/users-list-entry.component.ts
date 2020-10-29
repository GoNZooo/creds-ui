import { Component, Input, OnInit } from "@angular/core";
import { User } from "../models/user.model";

@Component({
  selector: "app-users-list-entry",
  templateUrl: "./users-list-entry.component.html",
  styleUrls: ["./users-list-entry.component.css"],
})
export class UsersListEntryComponent implements OnInit {
  @Input() user: User = {id: "", name: "", username: "", tokens: []};

  constructor() {
  }

  ngOnInit(): void {
  }
}
