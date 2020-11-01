import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "../models/user.model";

@Component({
  selector: "app-delete-user-confirmation",
  templateUrl: "./delete-user-confirmation.component.html",
  styleUrls: ["./delete-user-confirmation.component.css"],
})
export class DeleteUserConfirmationComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public user: User) {}

  ngOnInit(): void {}
}
