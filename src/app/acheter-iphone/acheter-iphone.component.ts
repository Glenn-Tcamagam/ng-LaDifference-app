import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Iphone } from "../iphone";
import { IPHONE } from "../mock-iphone-list";

@Component({
  selector: "app-acheter-iphone",
  templateUrl: "./acheter-iphone.component.html",
  styleUrls: ["acheter-iphone.component.css"],
})
export class AcheterIphoneComponent implements OnInit {
  iphoneList: Iphone[];
  iphone: Iphone | undefined;

  registerForm = new FormGroup({});
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.iphoneList = IPHONE;
    const iphoneId: string | null = this.route.snapshot.paramMap.get("id");
    if (iphoneId) {
      this.iphone = this.iphoneList.find((iphone) => iphone.id == +iphoneId);
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
  goToIphoneList() {
    this.router.navigate(["/iphones"]);
  }
  saveData() {
    console.log(this.registerForm.value);
  }
}
