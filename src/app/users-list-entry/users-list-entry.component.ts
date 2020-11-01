import { Component, Input, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { UsersService } from "../services/users.service";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { DeleteUserConfirmationComponent } from "../delete-user-confirmation/delete-user-confirmation.component";

@Component({
  selector: "[app-user-list-entry]",
  templateUrl: "./users-list-entry.component.html",
  styleUrls: ["./users-list-entry.component.css"],
})
export class UsersListEntryComponent implements OnInit {
  readonly scopePattern = /^\S+$/;

  @Input() user: User = { id: "", name: "", username: "", tokens: [] };
  addingToken = false;
  scopeForm = this.formBuilder.group({
    scope: ["severnatazvezda.com", [Validators.required, Validators.pattern(this.scopePattern)]],
  });

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  addToken(id: string): void {
    if (this.scopeForm.valid) {
      this.usersService.addToken(id, this.scopeForm.value.scope).subscribe(() => {
        this.addingToken = false;
      });
    }
  }

  maybeDeleteUser(user: User): void {
    const dialogReference = this.dialog.open(DeleteUserConfirmationComponent, { data: user });

    dialogReference.afterClosed().subscribe((choice: unknown) => {
      if (typeof choice === "boolean" && choice) {
        this.deleteUser(user.id);
      }
    });
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

  tokenCount(): number {
    return this.user.tokens !== null ? this.user.tokens.length : 0;
  }
}
