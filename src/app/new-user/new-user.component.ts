import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserCreationData } from "../models/user-creation-data.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"],
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public usersService: UsersService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private clipboard: Clipboard
  ) {
    this.userForm = this.formBuilder.group({ name: "", username: "" });
  }

  ngOnInit(): void {}

  onSubmit(userData: UserCreationData): void {
    this.usersService.newUser(userData).subscribe((responseUserId) => {
      const snackbarReference = this.snackbar.open(
        `User with ID '${responseUserId}' created!`,
        "Copy ID",
        {
          duration: 5000,
          horizontalPosition: "center",
          verticalPosition: "top",
        }
      );

      snackbarReference.afterDismissed().subscribe(({ dismissedByAction }) => {
        if (dismissedByAction) {
          this.clipboard.copy(responseUserId);
        }
      });
    });
    this.userForm.reset();
  }
}
