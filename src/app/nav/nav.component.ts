import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: Observable<Firebase.User>
  authenticated = false;

  //constructor that evaluates to true if the auth is not null
  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.authenticated = true;
        }
      });
  }


  ngOnInit() {
  }

//Login in method that allows users to login with firebase and the google api, also logs it to the console if successful
  login() {
    this.af.auth.signInWithPopup(new Firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
    console.log('sign in successful');
  }

//Login out method that allows users to out of the app, also logs it to the console if successful
  logout() {
    this.af.auth.signOut();
    this.authenticated = false;
    console.log('log out successful');
  }
}



























