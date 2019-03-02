import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/observable/interval'
import {BlankdocPage} from "../blankdoc/blankdoc";
import {NewgoalPage} from "../newgoal/newgoal";


/**
 * Generated class for the GoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalsPage');
  }


  startTime(){
    setTimeout(function(){
      alert('you wrote for 10 seconds!');
    }, 10000)
  }


  openblankDoc() {
    this.navCtrl.push(BlankdocPage);
  }



  loadProgress="75";



  gotoNewGoalPage(){
    this.navCtrl.push(NewgoalPage);
  }

}
