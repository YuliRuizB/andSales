import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; // <-- Asegúrate de importar esto
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/enviroment.prod';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent ,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent] // <-- Esto es clave
})
export class AppModule { }
