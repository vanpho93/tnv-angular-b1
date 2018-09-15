import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {

  formSignUp = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, gmail]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    city: new FormControl('Sai Gon'),
    zip: new FormControl('70000'),
  });

  constructor() { }

  ngOnInit() {
  }

  get emailWarningMessage(): string {
    const emailControl = this.formSignUp.get('email');
    if (emailControl.untouched || emailControl.valid) return '';
    if (emailControl.errors.required) return 'Bạn cần nhập email';
    if (emailControl.errors.email) return 'Email không đúng định dạng';
    if (emailControl.errors.gmail) return 'Email phải là gmail';
  }

  signUp() { alert(JSON.stringify(this.formSignUp.value)); }
}

function gmail(control: FormControl) {
  if ((control.value as string).endsWith('@gmail.com')) return null;
  return { gmail: true };
}
