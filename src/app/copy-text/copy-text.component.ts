import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { from, Subscription } from "rxjs";

@Component({
  selector: "app-copy-text",
  templateUrl: "./copy-text.component.html",
  styleUrls: ["./copy-text.component.css"],
})
export class CopyTextComponent implements OnInit, OnDestroy {
  @Input() text = "";
  private _subscriptions = new Subscription();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  copyText(): void {
    const promise = navigator.clipboard.writeText(this.text);
    this._subscriptions.add(
      from(promise).subscribe(() => {
        console.log("Copied!");
      })
    );
  }
}
