import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Applewatch } from "../applewatch";
import { APPLEWATCH } from "../mock-applewatch-list";

@Component({
  selector: "app-acheter-applewatch",
  templateUrl: "./acheter-applewatch.component.html",
  styleUrls: ["acheter-applewatch.component.css"],
})
export class AcheterApplewatchComponent implements OnInit {
  applewatchList: Applewatch[];
  applewatch: Applewatch | undefined;
  registerForm = new FormGroup({});
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.applewatchList = APPLEWATCH;
    const applewatchId: string | null = this.route.snapshot.paramMap.get("id");
    if (applewatchId) {
      this.applewatch = this.applewatchList.find(
        (applewatch) => applewatch.id == +applewatchId
      );
    } else {
    }
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(4)]],
      mail: ["", [Validators.required, Validators.minLength(10)]],
      phone: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      position: ["", [Validators.required, Validators.minLength(10)]],
      capacite: ["", [Validators.required]],
      quantite: ["", [Validators.required]],
      couleurs: ["", [Validators.required]],
      checkbox1: false,
      checkbox2: false,
    });
  }
  saveData() {
    console.log(this.registerForm.value);
  }
}
