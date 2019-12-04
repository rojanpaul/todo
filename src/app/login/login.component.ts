import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginmessage = '';
  invalidlogin = false;

  // Dependency Injection used here
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  onLoginClicked() {
    console.log('login method called');
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // console.log('login successful' + this.username + this.password);
      this.loginmessage = 'login successful';
      this.invalidlogin = true;
      this.router.navigate(['welcome', this.username]);
    } else {
      // console.log('login failed'+ this.username + this.password);
      this.loginmessage = 'login failed';
      this.invalidlogin = false;
    }
  }
}
