import { Component } from "@angular/core";
import { environment } from "../environments/environment";
import { ConfigurationService } from "./services/configuration.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "creds-ui";

  constructor(public configuration: ConfigurationService) {
    this.configuration.token.next(environment.token);
  }
}
