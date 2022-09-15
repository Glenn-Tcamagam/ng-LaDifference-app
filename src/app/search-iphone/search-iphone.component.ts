import { Component, OnInit } from "@angular/core";
import { Iphone } from "../iphone";
import { IPHONE } from "../mock-iphone-list";

@Component({
  selector: "app-search-iphone",
  templateUrl: "./search-iphone.component.html",
  styleUrls: ["search-iphone.component.css"],
})
export class SearchIphoneComponent implements OnInit {
  iphone: Iphone | undefined;

  iphoneList: Iphone[] = IPHONE;
  // search: string[] = ["iphone 7 plus", "iphone xr"];

  constructor() {}

  ngOnInit(): void {
    // this.x = this.search;
  }
}
