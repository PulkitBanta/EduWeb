import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../form-validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  signup = false
  bool = true
  errorText = ""

  constructor(
    private fb: FormBuilder,
    private fvService: FormValidationService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.required]
    });
  }

  onSubmit() {
    if (this.fvService.validateEmail(this.signupForm.get('email').value) && this.fvService.validatePassword(this.signupForm.get('password').value) && (this.signupForm.value.password === this.signupForm.value.confirmPassword) && this.signupForm.value.terms) {
      this.signup = true
      this.bool = true
    } else {
      this.bool = false
      this.signup = false
    }
  }

}
