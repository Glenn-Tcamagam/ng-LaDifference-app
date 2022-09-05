import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Iphone } from "../iphone";
import { IPHONE } from "../mock-iphone-list";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["register-form.component.css"],
})
export class RegisterFormComponent implements OnInit {
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
  }

  onSubmit() {
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(4)]],
      mail: ["", [Validators.required, Validators.minLength(11)]],
      phone: ["", [Validators.required]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      position: ["", [Validators.required, Validators.minLength(4)]],
      quantite: ["", [Validators.required, Validators.minLength(4)]],
      capacite: ["", [Validators.required, Validators.minLength(4)]],
      couleurs: ["", [Validators.required, Validators.minLength(4)]],
      checkbox1: true,
      checkbox2: true,
      sendCatalog: true,
    });
  }
}
