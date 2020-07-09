import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onGoogleLoggin(){
    // this.authService
    // this.authService.login().then( data => {
    //   console.log(data.user.displayName);
    // });
    this.authService.signInWithGoogle().then(data => {
      console.log(data.user);
      console.log(data.user.displayName);
      console.log(data.user.email);
      console.log(data.user.uid);
      console.log(data.user.photoURL);
    });
  }

}
