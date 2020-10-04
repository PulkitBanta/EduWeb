import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  signup = false
  bool = true

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.required]
    });
  }

  onSubmit() {
    if(this.signupForm.valid) {
      this.valid();
    } else {
      this.invalid();
    }
  }

  valid() {
    this.signup = this.bool = true;
  }

  invalid() {
    this.signup = this.bool = false;
  }

}
