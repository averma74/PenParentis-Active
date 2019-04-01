import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { GoalsServiceProvider} from "../../providers/goals-service/goals-service";
import { Goal} from "../../models/goals.model";
import {ViewGoalPage} from "../view-goal/view-goal";
import {NewgoalPage} from "../newgoal/newgoal";
import {ViewNotePage} from "../view-note/view-note";

@IonicPage()
@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {

  private goals: Promise<Goal[]>;
  private goal: Goal;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private goalsService: GoalsServiceProvider) {
  }

  ionViewWillEnter() {
    this.goals = this.getAllGoals();

  }


 /* getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.navCtrl.push(ViewNotePage, { note: this.note})
    })
  }*/

  getGoal(){
    this.goalsService.getGoal().then((g) => {
      this.goal = g;
      this.navCtrl.push(ViewGoalPage, { goal: this.goal})
      console.log("GetGoals" + this.goal);
    })
  }

  getAllGoals(){
    console.log("getAllGoals" + this.goal);
    return this.goalsService.getAllGoals();
  }

  loadProgress="75";

  gotoNewGoalPage(){
    this.navCtrl.push(NewgoalPage);
  }

}
