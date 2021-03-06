import { AuthService } from 'app/shared/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { FlashService } from './shared/flash.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { ClientsService } from './clients/clients.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientsDetailsComponent } from './clients/clients-details/clients-details.component';
import { FacturesComponent } from './factures/factures.component';
import { FacturesListComponent } from './factures/factures-list/factures-list.component';
import { HttpModule } from '@angular/http';
import { ClientsStartComponent } from './clients/clients-start/clients-start.component';
import { ClientsEditComponent } from './clients/clients-edit/clients-edit.component';
import { FacturesStartComponent } from './factures/factures-start/factures-start.component';
import { FacturesEditComponent } from './factures/factures-edit/factures-edit.component';
import { FacturesService } from 'app/factures/factures.service';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { HomeComponent } from './home/home.component';
import { APP_INITIALIZER } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { FacturesFilterPipe } from './factures-filter.pipe';
import { SignupComponent } from './auth/signup/signup.component';


const firebaseConf = {
  apiKey: "AIzaSyAQnkHAsKBKhSAT4AfuFdZp7_Iv2E9_yoI",
  authDomain: "boite-a-recettes-4232d.firebaseapp.com",
  databaseURL: "https://boite-a-recettes-4232d.firebaseio.com",
  projectId: "boite-a-recettes-4232d",
  storageBucket: "boite-a-recettes-4232d.appspot.com",
  messagingSenderId: "531585022220"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientsDetailsComponent,
    FacturesComponent,
    FacturesListComponent,
    LoginComponent,
    ClientsStartComponent,
    ClientsEditComponent,
    FacturesStartComponent,
    FacturesEditComponent,
    HomeComponent,
    FacturesFilterPipe,
    SignupComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule, FormsModule, AppRoutingModule, ReactiveFormsModule, SimpleNotificationsModule.forRoot(), AngularFireModule.initializeApp(firebaseConf)
  ],
  providers: [ClientsService, FacturesService, AuthService, FlashService, AuthGuard, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
