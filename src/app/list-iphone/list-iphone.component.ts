import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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

  p: number = 1;
  filterinputsearch: Iphone[] = [];
  formrecherche = new FormGroup({
    search: new FormControl(""),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterinputsearch = this.iphoneList;
  }
  filterInput() {
    console.log(this.formrecherche.get("search")?.value);
    this.filterinputsearch = this.iphoneList.filter((item) =>
      item.name
        .toLocaleLowerCase()
        .includes(this.formrecherche.get("search")?.value.toLocaleLowerCase())
    );
  }

  goToDetailList(iphone: Iphone) {
    this.router.navigate(["/iphone", iphone.id]);
  }
  goToIphoneAcheter(iphone: Iphone) {
    this.router.navigate(["/iphoneacheter", iphone.id]);
  }
}
