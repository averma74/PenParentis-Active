import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GoalsServiceProvider } from "../../providers/goals-service/goals-service";
import { Goal } from "../../models/goals.model";

@IonicPage()
@Component({
  selector: 'page-view-goal',
  templateUrl: 'view-goal.html',
})

export class ViewGoalPage {
  goal: Goal;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    //,private goalsService: GoalsServiceProvider
    ) 
    {
    //this.goal = this.navParams.get('goal');
  }

}