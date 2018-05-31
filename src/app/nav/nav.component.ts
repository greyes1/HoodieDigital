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

  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
        }
      });
  }


  ngOnInit() {
  }

  login() {
    this.af.auth.signInWithPopup(new Firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
    console.log('sign in successful');
  }


  logout() {
    this.af.auth.signOut();
    this.authenticated = false;
    console.log('log out successful');
  }
}



























