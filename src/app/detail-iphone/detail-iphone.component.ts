import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Iphone } from "../iphone";
import { IPHONE } from "../mock-iphone-list";

@Component({
  selector: "app-detail-iphone",
  templateUrl: "./detail-iphone.component.html",
  styles: [],
})
export class DetailIphoneComponent implements OnInit {
  iphoneList: Iphone[];

  iphone: Iphone | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.iphoneList = IPHONE;
    const iphoneId: string | null = this.route.snapshot.paramMap.get("id");
    if (iphoneId) {
      this.iphone = this.iphoneList.find((iphone) => iphone.id == +iphoneId);
    } else {
    }
  }

  goToIphoneList() {
    this.router.navigate(["/iphones"]);
  }
}
