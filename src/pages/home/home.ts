import {InAppBrowser} from "@ionic-native/in-app-browser";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoalsPage} from '../goals/goals';
import {WriteNowPage} from '../write-now/write-now';
import {MembershipPage} from '../membership/membership';
import {SalonsPage} from '../salons/salons';
import {DonatePage} from '../donate/donate';
import {ResourcesPage} from '../resources/resources';
import {FacebookPage} from '../facebook/facebook';
import {TwitterPage} from "../twitter/twitter";
import {InstagramPage} from "../instagram/instagram";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  goToGoals() {
    this.navCtrl.push(GoalsPage, {

    })
  }
  goToWriteNow(){
    this.navCtrl.push(WriteNowPage, {

    })
  }
  goToMembership(){
    this.navCtrl.push(MembershipPage, {

    })
  }
  // goToSalons(){
  //   // const browser = this.inAppBrowser.create("http://www.penparentis.org/calendar/", "_self",);
  //   this.navCtrl.push(SalonsPage, {

  //   })
  // }

  goToSalons(){
    const browser = this.inAppBrowser.create("http://www.penparentis.org/calendar/", "_self",);

  }
  
  goToDonate(){
    this.navCtrl.push(DonatePage, {

    })
  }
  goToResources(){
    this.navCtrl.push(ResourcesPage, {

    })
  }
  goToFacebook(){
    this.navCtrl.push(FacebookPage, {

    })
  }

  goToTwitter(){
    this.navCtrl.push(TwitterPage, {

    })
  }

  goToInstagram(){
    this.navCtrl.push(InstagramPage, {

    })
  }


url: string;
 constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }

  openWebpage(){


   const browser = this.inAppBrowser.create("https://google.com", "_self");

  }


  slider=[
    {
      image:"assets/imgs/image1.png"
    },
    {
      image:"assets/imgs/image2.png"
    },
    {
      image:"assets/imgs/image3.png"
    },
    {
      image:"assets/imgs/image4.png"
    },
    {
      image:"assets/imgs/image5.png"
    },
    {
      image:"assets/imgs/image6.png"
    }
  ];

}
