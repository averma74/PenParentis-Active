import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AcknowledgementsPage } from '../pages/acknowledgements/acknowledgements';
import { AuthService } from '../providers/auth-service/auth.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = LoginPage;

  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private emailComposer: EmailComposer,
    private auth: AuthService) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage },
      { title: 'About', icon: 'people', component: AboutPage },
      { title: 'Contact', icon: 'mail', component: ContactPage },
      { title: 'Acknowledgements', icon: 'logo-buffer', component: AcknowledgementsPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}