import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService} from "../../providers/note-service/note-service";
import { Note} from "../../models/note.model";
import {FormGroup, Validators, FormControl} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-blankdoc',
  templateUrl: 'blankdoc.html',
})
export class BlankdocPage {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  dummyText: string='Type more';

  public inputVal:string;
  constructor(public navCtrl: NavController,
              private noteService: NoteService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),

    })
  }
  myInput: any;

  saveNote(note: Note){
      this.noteService.saveNote(note);
      this.navCtrl.pop();
  }





}
