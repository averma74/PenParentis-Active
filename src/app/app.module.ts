import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoalsPage } from '../pages/goals/goals';
import { WriteNowPage } from '../pages/write-now/write-now';
import { MembershipPage } from '../pages/membership/membership';
import { SalonsPage } from '../pages/salons/salons';
import { DonatePage } from '../pages/donate/donate';
import { ResourcesPage } from '../pages/resources/resources';
import { FacebookPage } from '../pages/facebook/facebook';
import { TwitterPage } from "../pages/twitter/twitter";
import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { InstagramPage } from "../pages/instagram/instagram";
import { BlankdocPage } from "../pages/blankdoc/blankdoc";
import { TimerPage } from "../pages/timer/timer";
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";
import { IonicStorageModule } from "@ionic/storage";
import { AngularFireAuthModule } from "angularfire2/auth"
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { NoteService } from '../providers/note-service/note-service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewNotePage } from "../pages/view-note/view-note";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { BrowserTab } from "@ionic-native/browser-tab";
import { NewgoalPage } from "../pages/newgoal/newgoal";
import { Autosize } from "../directives/directives.module";
import { GoalsServiceProvider } from '../providers/goals-service/goals-service';
import { ViewGoalPage } from "../pages/view-goal/view-goal";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AcknowledgementsPage } from '../pages/acknowledgements/acknowledgements';
import { AuthService } from '../providers/auth-service/auth.service';
import { RegisterPageModule } from '../pages/register/register.module';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AcknowledgementsPage,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    LoginPage,
    InstagramPage,
    TwitterPage,
    BlankdocPage,
    TimerPage,
    ProgressBarComponent,
    ViewNotePage,
    NewgoalPage,
    Autosize,
    ViewGoalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RegisterPageModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AcknowledgementsPage,
    GoalsPage,
    WriteNowPage,
    MembershipPage,
    SalonsPage,
    DonatePage,
    ResourcesPage,
    FacebookPage,
    LoginPage,
    BlankdocPage,
    InstagramPage,
    TwitterPage,
    TimerPage,
    ViewNotePage,
    NewgoalPage,
    ViewGoalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    InAppBrowser,
    BrowserTab,
    GoalsServiceProvider,
    EmailComposer,
    GoalsServiceProvider,
    AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
