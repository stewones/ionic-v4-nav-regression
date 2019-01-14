import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PageOutsideTabsPage } from "./page-outside-tabs.page";
import { HeaderButtonModule } from "../header-button/header-button.module";

const routes: Routes = [
  {
    path: "",
    component: PageOutsideTabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageOutsideTabsPage]
})
export class PageOutsideTabsPageModule {}
