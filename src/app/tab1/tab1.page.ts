import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private nav: NavController, private router: Router) {}

  navigate() {
    // this.nav.navigateRoot(["/page-outside-tabs"]); // avoid this
    this.router.navigate(["/page-outside-tabs"]);
  }
}
