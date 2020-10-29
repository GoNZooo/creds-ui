import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserCreationData } from "../models/user-creation-data.model";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"],
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  responseUserId: string | null = null;

  constructor(public usersService: UsersService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({ name: "", username: "" });
  }

  ngOnInit(): void {
  }

  onSubmit(userData: UserCreationData): void {
    console.log({ userData });
    this.usersService.newUser(userData).subscribe(responseUserId => {
      this.responseUserId = responseUserId;
      console.log({ thisResponseUserId: this.responseUserId });
    });
    this.userForm.reset();
  }
}
