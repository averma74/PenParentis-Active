import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  forSendingEmail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {

      }
      else {
        alert("No Email client was found !");
      }
    });

    let email = {
      to: 'info@penparentis.org',
      cc: ' ',
      bcc: [''],
      attachments: [''],
      subject: '',
      body: '',
      isHtml: true
    };

    this.emailComposer.open(email);
  };
}