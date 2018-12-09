import { Component } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,
    public autService: AutenticacionService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryGoogleLogin() {
    this.autService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/']);
      })
  }

  tryLogin(value) {
    this.autService.doLogin(value)
      .then(res => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

}
