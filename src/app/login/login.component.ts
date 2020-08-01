import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { FormValidationService } from '../form-validation.service';

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
    private router: Router,
    private fvService: FormValidationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.fvService.validateEmail(this.loginForm.get('email').value) && this.fvService.validatePassword(this.loginForm.get('password').value)) {
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

}
