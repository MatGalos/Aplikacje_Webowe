import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notes: Note[] = this.getNotes();
        let newNotes: Note[] = notes.filter((note) => note.id != id);
        localStorage.setItem('notes',JSON.stringify(newNotes));
    }
    
    public addNote(note: Note): void {
        let noteValue = <string>localStorage.getItem('notes');
        let notes: Note[];
        notes = <Note[]>JSON.parse(noteValue);
        if(!notes)
            notes = [];
        notes.push(note);
        localStorage.setItem('notes',JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        let notesValue = <string>localStorage.getItem('notes');
        return <Note[]>JSON.parse(notesValue);
    }
   
}