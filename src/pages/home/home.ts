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
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { BrowserTab } from "@ionic-native/browser-tab";

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

  goToSalons(){
    this.navCtrl.push(SalonsPage, {

    })
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

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser, private browserTab: BrowserTab) {

  }

  public openWithBrowserTab(url: string) {
    if (this.browserTab.isAvailable()) {
      this.browserTab.openUrl(url);
    }else{
      let target = "_blank";
      this.inAppBrowser.create(url, target);
    }
  }


  public openWithInAppBrowser(url: string){
    let target = "_blank";
    this.inAppBrowser.create(url, target);
  }

  public openWithCordovaBrowser(url: string){
    let target="_self";
    this.inAppBrowser.create(url, target);
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
