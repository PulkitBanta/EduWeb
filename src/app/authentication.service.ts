import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public authenticate() {
    this.authenticated$.next(true);
  }

  get isLoggedIn() {
    return this.authenticated$.asObservable();
  }

  deauthenticate() {
    this.authenticated$.next(false);
  }
}