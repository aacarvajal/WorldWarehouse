import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CursoService } from './services/curso.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
//import { GuardService } from './services/guard.service';
import { InicioComponent } from './inicio/inicio.component';
import { NgxSpinnerModule } from 'ngx-spinner';


const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'addcurso', component: AddCursoComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'inises', component: InisesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: CursosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursoComponent,
    InisesComponent,
    RegistroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'AngPers'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [CursoService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
