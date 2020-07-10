import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoggin = false;
  userName = '';
  userEmail = '';
  userImage = '';
  userID = '';
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  onGoogleLoggin() {
    this.authService.signInWithGoogle().then((data) => {
      this.userEmail = data.user.email;
      this.userName = data.user.displayName;
      this.userImage = data.user.photoURL;
      this.userID = data.user.uid;
      this.isLoggin = true;
    });
  }
  onGoogleLoggout() {
    this.authService.loggoutWithGoogle().then(() => {
      this.isLoggin = false;
    });
  }
}
