import { Component, OnInit, Input } from '@angular/core';
import { Note } from './../note';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  // listData;
  // list = [];

  @Input()note: Note;


  constructor(
    // private _apiService: ApiService,
  ) {
    // this.listData = this._apiService.showNotes()
    // this.listData.then(data=>{      //cleans up the initial response data from service
    //   console.log(data);
    //   for(var i =0; i<data['notes'].length; i++){
    //     var created_at_clean = data['notes'][i].created_at; //grab the created at from data and set to var
    //     var created_at = new Date(created_at_clean); // Clean up date
    //     var newNote = new Note(data['notes'][i].text, created_at); // create a new Note from Note class using clean date
    //     this.list.push(newNote); //push new note in line above to an array in component
    //   }
    // })
    // .catch(err => {
    //   console.log(`Error from showsNotes function in service: ${err}`);
    // })
  }


  ngOnInit() {
    // this.listData = this._apiService.showNotes()
    // this.listData.then(data=>{      //cleans up the initial response data from service
    //   console.log(data);
    //   for(var i =0; i<data['notes'].length; i++){
    //     var created_at_clean = data['notes'][i].created_at; //grab the created at from data and set to var
    //     var created_at = new Date(created_at_clean); // Clean up date
    //     var newNote = new Note(data['notes'][i].text, created_at); // create a new Note from Note class using clean date
    //     this.list.push(newNote); //push new note in line above to an array in component
    //   }
    // })
    // .catch(err => {
    //   console.log(`Error from showsNotes function in service: ${err}`);
    // })
  }

}
