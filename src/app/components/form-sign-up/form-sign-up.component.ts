import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {

  formSignUp = new FormGroup({
    email: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    city: new FormControl('Sai Gon'),
    zip: new FormControl('70000'),
  });

  constructor() { }

  ngOnInit() {
  }

  signUp() { alert(JSON.stringify(this.formSignUp.value)); }
}
