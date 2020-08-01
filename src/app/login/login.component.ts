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
  bool = true
  login = false

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.validateEmail() && this.validatePassword()) {
      this.login = true;
      this.bool = this.login;

      if(this.login) {
        this.auth.authenticate();
        setTimeout(() => {
          this.router.navigateByUrl('/platform')
        }, 500);
      }

    } else {
      this.bool = false;
      this.login = false
    }
  }

  validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.loginForm.get('email').value)) {
      return true
    }
    return false
  }

  validatePassword() {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(this.loginForm.get('password').value)) {
      return true
    }
    return false
  }

}
