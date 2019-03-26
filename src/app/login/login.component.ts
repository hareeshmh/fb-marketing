import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    //this.userService.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // Sign in using a popup.
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token.
      var token = (<any>result).credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    });
  }

}
