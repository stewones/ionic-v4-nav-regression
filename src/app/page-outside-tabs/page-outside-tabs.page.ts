import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-page-outside-tabs",
  templateUrl: "./page-outside-tabs.page.html",
  styleUrls: ["./page-outside-tabs.page.scss"]
})
export class PageOutsideTabsPage implements OnInit {
  constructor(private nav: NavController) {}

  ngOnInit() {}

  navigate() {
    this.nav.navigateRoot("/");
  }
}
