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
  
  form: FormGroup
  login = false

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

   onSubmit() {
    this.auth.authenticate();
    this.login = true;
    this.router.navigate(['../platform'])
  }

}
