import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { AngularFireAuth } from 'angularfire2/auth/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;


  constructor(
    private autenticacionService: AutenticacionService,
    private afAuth: AngularFireAuth) { }


  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.autenticacionService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.afAuth.auth.signOut();
  }

}
