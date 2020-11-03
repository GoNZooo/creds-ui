import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatTooltipModule,
  MatRippleModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
