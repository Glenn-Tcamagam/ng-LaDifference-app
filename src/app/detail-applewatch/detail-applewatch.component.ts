import { Component, OnInit } from "@angular/core";
import { Applewatch } from "../applewatch";
import { ActivatedRoute, Router } from "@angular/router";
import { APPLEWATCH } from "../mock-applewatch-list";

@Component({
  selector: "app-detail-applewatch",
  templateUrl: "./detail-applewatch.component.html",
  styleUrls: ["detail-applewatch.component.css"],
})
export class DetailApplewatchComponent implements OnInit {
  applewatchList: Applewatch[];
  applewatch: Applewatch | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.applewatchList = APPLEWATCH;
    const applewatchId: string | null = this.route.snapshot.paramMap.get("id");
    if (applewatchId) {
      this.applewatch = this.applewatchList.find(
        (applewatch) => applewatch.id == +applewatchId
      );
    } else {
    }
  }
  goToapplewatchList() {
    this.router.navigate(["/applewatchs"]);
  }
}
