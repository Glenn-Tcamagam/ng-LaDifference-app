import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListIphoneComponent } from "./list-iphone/list-iphone.component";
import { DetailIphoneComponent } from "./detail-iphone/detail-iphone.component";
import { NavbarIphoneComponent } from "./navbar-iphone/navbar-iphone.component";
import { BorderCardDirective } from "./border-card.directive";
import { FooterIphoneComponent } from "./footer-iphone/footer-iphone.component";

import { InMemoryDataService } from "./in-memory-data.service";
import { AcheterIphoneComponent } from "./acheter-iphone/acheter-iphone.component";
import { SearchIphoneComponent } from "./search-iphone/search-iphone.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    ListIphoneComponent,

    DetailIphoneComponent,
    NavbarIphoneComponent,
    BorderCardDirective,
    FooterIphoneComponent,
    AcheterIphoneComponent,
    SearchIphoneComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],

  providers: [],
  bootstrap: [AppComponent, ListIphoneComponent],
})
export class AppModule {}
