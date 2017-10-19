var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    text: { type: String, required: true },
    created_at: {type: Date, default: Date.now},
   })

var note = mongoose.model('Note', NoteSchema);