import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    console.log('Before isUserLoggedIn() : ' + this.isUserLoggedIn());
    if (username === 'rojan' && password === 'rojan') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('After isUserLoggedIn() : ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
