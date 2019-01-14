import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { HeaderButtonModule } from "../header-button/header-button.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderButtonModule,
    RouterModule.forChild([{ path: "", component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
