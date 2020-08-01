import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe(res => {
      this.isLoggedIn$ = res;
    });
  }

  logout() {
    this.authenticationService.deauthenticate();
    setTimeout(() => {
      this.router.navigateByUrl('')
    }, 500);
  }

}
