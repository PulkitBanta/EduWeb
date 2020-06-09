import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  show: number

  constructor() { }

  changeStandard(std) {
    if(std === 11)
      this.show = std;
    else this.show = 12;
  }
}
