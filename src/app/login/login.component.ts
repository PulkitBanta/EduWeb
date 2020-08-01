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
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.bool = true;
      this.login = true;
      this.auth.authenticate();
      setTimeout(() => {
        this.router.navigateByUrl('/platform')
      }, 500);
    } else {
      this.bool = false;
      this.login = false
    }
  }

}
