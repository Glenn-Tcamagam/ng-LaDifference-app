import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcheterIphoneComponent } from "./acheter-iphone/acheter-iphone.component";
import { DetailIphoneComponent } from "./detail-iphone/detail-iphone.component";
import { ListIphoneComponent } from "./list-iphone/list-iphone.component";

const routes: Routes = [
  { path: "iphones", component: ListIphoneComponent },
  { path: "iphone/:id", component: DetailIphoneComponent },
  { path: "iphoneacheter/:id", component: AcheterIphoneComponent },
  { path: "", redirectTo: "iphones", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
