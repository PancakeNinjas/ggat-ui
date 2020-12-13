import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


@NgModule ({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})

export class IconsModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('ggat-logo', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ggat_icon.svg'));
  }
}
