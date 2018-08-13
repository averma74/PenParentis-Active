import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import {BlankdocPage} from '../blankdoc/blankdoc';

/**
 * Generated class for the WriteNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-now',
  templateUrl: 'write-now.html',
})

export class WriteNowPage {//start export class WriteNowPage
  todos: string[] = [];
    todo: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {//start Constructor

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteNowPage');

  }//end ionViewDidLoad
  add() {
       this.todos.push(this.todo);
       this.todo = "";
   }
   delete(item) {
       var index = this.todos.indexOf(item, 0);
       if (index > -1) {
           this.todos.splice(index, 1);
       }
   }
  openblankOpen() {
  this.navCtrl.push(BlankdocPage);
}


}
