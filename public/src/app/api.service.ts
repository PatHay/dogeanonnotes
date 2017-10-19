import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note';
import "rxjs/Rx";

@Injectable()
export class ApiService {

  private _notes:Note[]=[];  //Private _notes variable, Note class is array and set to blank array;

  constructor(
    private _http: Http,
  ) {
    this.showNotes();
  }

  createNote(note) {
    console.log("Note created in service!")
    this._notes.push(note);

    this._http.post('/notes', note).toPromise()
      .then(data => {
        console.log("inside then of promise in post")
        console.log(data)
      })
      .catch(err => {
        console.log("in api service promise catch")
        console.log(err)
      });
  }

  showNotes(){
    console.log("Showing all notes")
    var allNotes = this._http.get('/notes')
    .map( data => data.json() )
    .toPromise()

    console.log(allNotes);

    allNotes.then(data=>{      //cleans up the initial response data
      console.log(data);
      for(var i =0; i<data['notes'].length; i++){
        var created_at_clean = data['notes'][i].created_at; //grab the created at from data and set to var
        var created_at = new Date(created_at_clean); // Clean up date
        var newNote = new Note(data['notes'][i].text, created_at); // create a new Note from Note class using clean date
        this._notes.push(newNote); //push new note in line above to an array in component
      }
    })
    .catch(err => {
      console.log(`Error from showsNotes function: ${err}`);
    })
  }

  notes() {
    return this._notes;
  }


}
