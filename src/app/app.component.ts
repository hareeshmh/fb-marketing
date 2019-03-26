import { Component } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FB Marketing Tool';

  constructor(private userService: UserService) {
    userService.isLoggedIn().subscribe(auth => {
      console.log('Login status : '+auth)
    })
  }

  logout() {
    this.userService.afAuth.auth.signOut();
  }

}
