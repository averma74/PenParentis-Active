import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoalsPage } from '../pages/goals/goals';
import { WriteNowPage } from '../pages/write-now/write-now';
import { MembershipPage } from '../pages/membership/membership';
import {SalonsPage} from '../pages/salons/salons';
import {DonatePage} from '../pages/donate/donate';
import {ResourcesPage} from '../pages/resources/resources';
import {FacebookPage} from '../pages/facebook/facebook';
import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule} from "angularfire2/auth"

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home'; //Remove
import { FIREBASE_CONFIG } from "./app.firebase.config";

@NgModule({
  declarations: [
    MyApp,
    //HomePage, //remove
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}