import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConfigurationService {
  token: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() {}
}
