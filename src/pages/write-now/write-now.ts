import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import {BlankdocPage} from '../blankdoc/blankdoc';
import {Storage} from "@ionic/storage";
import {NoteService} from "../../providers/note-service/note-service";
import { Note } from "../../models/note.model";
import {ViewNotePage} from "../view-note/view-note";

@IonicPage()
@Component({
  selector: 'page-write-now',
  templateUrl: 'write-now.html',
})

export class WriteNowPage {//start export class WriteNowPage
  todos: string[] = [];
  todo: string;

  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private noteService: NoteService) {//start Constructor

  }

  ionViewWillEnter(){
    this.notes = this.getAllNotes();
  }

  /*-----------------------------------------------------------------------------*/


  //Open BlankDocPage
  openblankDoc() {
  this.navCtrl.push(BlankdocPage);
  }

  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.navCtrl.push(ViewNotePage, { note: this.note})
    })
  }

  getAllNotes(){
    return this.noteService.getAllNotes();
  }


}
