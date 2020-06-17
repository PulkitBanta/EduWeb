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
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.value.email && this.signupForm.value.password && this.signupForm.value.confirmPassword && (this.signupForm.value.password === this.signupForm.value.confirmPassword)) {
      this.signup = true
      this.bool = true
    } else {
      this.bool = false
      this.signup = false
    }
  }

}
