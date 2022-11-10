import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcheterApplewatchComponent } from "./acheter-applewatch/acheter-applewatch.component";
import { AcheterIphoneComponent } from "./acheter-iphone/acheter-iphone.component";
import { DetailApplewatchComponent } from "./detail-applewatch/detail-applewatch.component";
import { DetailIphoneComponent } from "./detail-iphone/detail-iphone.component";
import { ListApplewatchComponent } from "./list-applewatch/list-applewatch.component";
import { ListIphoneComponent } from "./list-iphone/list-iphone.component";
import { VisitergalerieComponent } from "./visitergalerie/visitergalerie.component";

const routes: Routes = [
  { path: "iphones", component: ListIphoneComponent },
  { path: "iphone/:id", component: DetailIphoneComponent },
  { path: "iphoneacheter/:id", component: AcheterIphoneComponent },
  { path: "applewatchs", component: ListApplewatchComponent },
  { path: "applewatch/:id", component: DetailApplewatchComponent },
  { path: "applewatchacheter/:id", component: AcheterApplewatchComponent },
  { path: "visitergalerie", component: VisitergalerieComponent },
  { path: "", redirectTo: "iphones", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
