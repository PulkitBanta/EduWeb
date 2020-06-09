import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private library: FaIconLibrary
  ) { }

  ngOnInit() {
    this.library.addIcons(faFacebookF, faGithub, faLinkedinIn, faGooglePlusG, faTwitter);
  }

}
