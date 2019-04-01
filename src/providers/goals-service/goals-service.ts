import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import { Goal} from "../../models/goals.model";
import {titleCase} from "@ionic/app-scripts";

@Injectable()
export class GoalsServiceProvider {

  private goals: Goal[] = [];
  private goal: Goal;

  constructor(public storage: Storage) {
  }

  saveGoal(goal: Goal){
    this.goals.push(goal);
    this.storage.set('goals', this.goals);
    let count = 0;
    count++;
  }

  /*getNote(createDate: number){
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(r => r.createDate === createDate);
      return this.note;
    });
  }*/

  getAllGoals(){
    return this.storage.get('goals').then(
      (goals) => {
        this.goals = goals == null ? [] : goals;
        return [...this.goals];
      }
    )
  }

  getGoal(){
    return this.storage.get('goals').then((goals) => {
      return this.goal;
    });
  }

}
