import { Component, OnInit } from '@angular/core';
import { Note } from './../note';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: Note=new Note("", "");

  constructor(
    private _apiService: ApiService,
  ) { }

  onSubmit(){
    this.note.created_at = new Date();
    this._apiService.createNote(this.note);
    this.note = new Note("", "");
    // this._apiService.getNotes();
  }

  ngOnInit() {
  }

}
