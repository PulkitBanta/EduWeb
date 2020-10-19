import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  signupSuccess = false

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [true, Validators.required]
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
    this.signupSuccess = true;
  }

  invalid() {
    this.signupSuccess = false;
  }

}
