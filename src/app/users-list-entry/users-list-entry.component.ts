import { Component, Input, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { UsersService } from "../services/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "[app-user-list-entry]",
  templateUrl: "./users-list-entry.component.html",
  styleUrls: ["./users-list-entry.component.css"],
})
export class UsersListEntryComponent implements OnInit {
  @Input() user: User = { id: "", name: "", username: "", tokens: [] };
  addingToken = false;
  scopeForm: FormGroup;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.scopeForm = this.formBuilder.group({ scope: "severnatazvezda.com" });
  }

  ngOnInit(): void {}

  addToken(id: string, scope: string): void {
    this.usersService.addToken(id, scope).subscribe(() => {
      this.addingToken = false;
      this.scopeForm.reset();
    });
  }

  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe(() => {});
  }
}
