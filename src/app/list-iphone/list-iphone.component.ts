import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iphone } from "../iphone";
import { IPHONE } from "../mock-iphone-list";

@Component({
  selector: "app-list-iphone",
  templateUrl: "./list-iphone.component.html",
  styleUrls: ["list-iphone.component.css"],
})
export class ListIphoneComponent implements OnInit {
  iphoneList: Iphone[] = IPHONE;
  iphone: Iphone | undefined;
  p: number = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetailList(iphone: Iphone) {
    this.router.navigate(["/iphone", iphone.id]);
  }
  goToIphoneAcheter(iphone: Iphone) {
    this.router.navigate(["/iphoneacheter", iphone.id]);
  }
}
