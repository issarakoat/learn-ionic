import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}
  // this login would work too
  loginWithGoogle(): Promise<object> {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  signInWithGoogle() {
    console.log('Sign in with Google');
    // return this.oauthSignIn(new auth.GoogleAuthProvider());
    if (!(window as any).cordova) {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }
  }
  loggoutWithGoogle() {
    return this.afAuth.signOut();
  }
  //// I dont think i need the thing down here
  // private oauthSignIn(provider: AuthProvider) {
  //   if (!(window as any).cordova) {
  //     return this.afAuth.signInWithPopup(provider);
  //   } else {
  //     return this.afAuth.signInWithRedirect(provider).then(() => {
  //       return this.afAuth
  //         .getRedirectResult()
  //         .then((result) => {
  //           const user = result.user;
  //           console.log(user);
  //         })
  //         .catch( (error) => {
  //           // Handle Errors here.
  //           alert(error.message);
  //         });
  //     });
  //   }
  // }
}
