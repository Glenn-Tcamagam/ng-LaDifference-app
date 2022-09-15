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

  // qntoption: number[] = [1, 2, 3, 4, 5];
  // errorFistName!: string;
  // errorMail!: string;
  // errorPhone!: string;
  // errorCity!: string;
  // errorPosition!: string;
  // errorQuantite!: number;
  // errorCapacite!: string;
  // errorCouleurs!: string;
  // form: FormGroup;
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
      checkbox1: true,
      checkbox2: false,
    });
    // this.form = this.fb.group({
    //   qnt: [1],
    // });
  }

  saveData() {
    console.log(this.registerForm.value);

    // if (!this.registerForm.get("firstName")?.valid) {
    //   this.errorFistName = "entrez votre prenom ...";
    // }
    // if (!this.registerForm.get("mail")?.valid) {
    //   this.errorMail = "entrez votre mail ...";
    // }
    // if (!this.registerForm.get("phone")?.valid) {
    //   this.errorPhone = "entrez votre telephone...";
    // }
    // if (!this.registerForm.get("city")?.valid) {
    //   this.errorCity = "entrez votre ville ...";
    // }
    // if (!this.registerForm.get("position")?.valid) {
    //   this.errorPosition =
    //     "Bien nous indiquer votre position pour la livraison ...";
    // } else {
    //   console.log("ok");
    // }
  }
}
