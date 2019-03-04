import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import { Goal} from "../../models/goals.model";

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
