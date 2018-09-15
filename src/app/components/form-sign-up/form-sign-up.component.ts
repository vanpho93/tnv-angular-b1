import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {
  formSignUp = new FormGroup({
    email: new FormControl('vanpho01@gmail.com'),
    name: new FormControl('pho'),
    city: new FormControl('Sai Gon'),
    zip: new FormControl('70000'),
  });

  constructor() { }

  ngOnInit() {
  }

}
