import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent , pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(APP_ROUTES);