import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Goal} from "../../models/goals.model";
import { GoalsServiceProvider} from "../../providers/goals-service/goals-service";
import {FormControl, FormGroup} from "@angular/forms";
import {Note} from "../../models/note.model";
import {NoteService} from "../../providers/note-service/note-service";


@IonicPage()
@Component({
  selector: 'page-newgoal',
  templateUrl: 'newgoal.html',
})
export class NewgoalPage {
  formGroup: FormGroup;
  goal: Goal;
  activity: string = '';
  duration: number;

  public inputVal:string;
  constructor(public navCtrl: NavController,
              private goalsService: GoalsServiceProvider) {
    this.formGroup = new FormGroup({
      activity: new FormControl(),
      duration: new FormControl(),

    })
  }


  saveGoal(goal: Goal){
    this.goalsService.saveGoal(goal);
    this.navCtrl.pop();
  }





}
