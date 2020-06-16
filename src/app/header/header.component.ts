import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$;

  constructor(
    public authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe(res => {
      this.isLoggedIn$ = res;
    });
  }

}
