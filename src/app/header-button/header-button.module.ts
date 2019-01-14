import { NgModule } from "@angular/core";
import { HeaderButtonComponent } from "./header-button.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [IonicModule],
  declarations: [HeaderButtonComponent],
  exports: [HeaderButtonComponent]
})
export class HeaderButtonModule {}
