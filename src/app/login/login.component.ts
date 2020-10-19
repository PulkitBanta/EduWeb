import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  loginSuccess = false

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // if form is vaild, then login else show error
    if (this.loginForm.valid) {
      this.valid();
      this.auth.authenticate();
      setTimeout(() => {
        this.router.navigateByUrl('/platform')
      }, 500);
    } else {
      this.invalid();
    }
  }

  valid() {
    this.loginSuccess = true;
  }

  invalid() {
    this.loginSuccess = false;
  }

}
