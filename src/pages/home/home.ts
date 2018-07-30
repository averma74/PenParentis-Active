import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoalsPage} from '../goals/goals';
import {WriteNowPage} from '../write-now/write-now';
import {MembershipPage} from '../membership/membership';
import {SalonsPage} from '../salons/salons';
import {DonatePage} from '../donate/donate';
import {ResourcesPage} from '../resources/resources';
import {FacebookPage} from '../facebook/facebook';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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