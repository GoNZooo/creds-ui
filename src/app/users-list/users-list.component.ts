import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { MatDialog } from "@angular/material/dialog";
import { NewUserComponent } from "../new-user/new-user.component";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  constructor(public usersService: UsersService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  openNewUserDialog(): void {
    const dialogReference = this.dialog.open(NewUserComponent);

    dialogReference.afterClosed().subscribe(() => {});
  }
}
