import { Component, Input, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { UsersService } from "../services/users.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "[app-user-list-entry]",
  templateUrl: "./users-list-entry.component.html",
  styleUrls: ["./users-list-entry.component.css"],
})
export class UsersListEntryComponent implements OnInit {
  @Input() user: User = { id: "", name: "", username: "", tokens: [] };
  addingToken = false;
  scope = new FormControl("severnatazvezda.com", [
    Validators.required,
    Validators.pattern(/^\S+$/),
  ]);

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  addToken(id: string, scope: FormControl): void {
    if (scope.valid) {
      this.usersService.addToken(id, scope.value).subscribe(() => {
        this.addingToken = false;
      });
    }
  }

  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe(() => {});
  }

  cancelAddingToken(): void {
    this.addingToken = false;
  }

  setAddingToken(): void {
    this.addingToken = true;
  }
}
