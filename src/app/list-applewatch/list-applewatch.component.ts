import { Component, OnInit } from "@angular/core";
import { Applewatch } from "../applewatch";
import { APPLEWATCH } from "../mock-applewatch-list";
import { Router } from "@angular/router";
import { Iphone } from "../iphone";

@Component({
  selector: "app-list-applewatch",
  templateUrl: "./list-applewatch.component.html",
  styleUrls: ["list-applewatch.component.css"],
})
export class ListApplewatchComponent implements OnInit {
  applewatchList: Applewatch[] = APPLEWATCH;
  pa: number = 1;
  filterinputsearch2: Applewatch[] = [];
  applewatch: Applewatch;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterinputsearch2 = this.applewatchList;
  }
  goTodetailapplewatch(applewatch: Applewatch) {
    this.router.navigate(["/applewatch", applewatch.id]);
  }
  goToapplewatchacheter(applewatch: Applewatch) {
    this.router.navigate(["/applewatchacheter", applewatch.id]);
  }
}
