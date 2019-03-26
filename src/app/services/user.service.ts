import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public afAuth: AngularFireAuth) { }

  isLoggedUser(): Observable<firebase.User>{
    return this.afAuth.user
  }

  isLoggedIn(): Observable<Boolean>{
    return this.afAuth.authState.pipe(map(auth =>  auth ?  true : false))
  }

}
