import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the GoalPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html'
})
export class GoalPage {

  goalsRoot = 'GoalsPage'


  constructor(public navCtrl: NavController) {}

}
