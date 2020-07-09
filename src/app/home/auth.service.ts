import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}
  //this login would work too
  loginWithGoogle() {
    return <toPromise>this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  signInWithGoogle() {
    console.log("Sign in with Google");
    return this.oauthSignIn(new auth.GoogleAuthProvider());
  }
  loggoutWithGoogle(){
     return this.afAuth.signOut();
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!(<any>window).cordova) {
      return this.afAuth.signInWithPopup(provider);
    } else {
      return this.afAuth.signInWithRedirect(provider).then(() => {
        return this.afAuth
          .getRedirectResult()
          .then((result) => {
            let user = result.user;
            console.log(user);
          })
          .catch(function (error) {
            // Handle Errors here.
            alert(error.message);
          });
      });
    }
  }
}
