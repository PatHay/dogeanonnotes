var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    index: function(req, res){
        Note.find({}, function(err, notes){
            if (err){
                console.log(`This is the error: ${err}`);
            }
            else{
                res.json({'notes': notes});
            }
        })
    },
    new: function(req, res){
        var note = new Note({ text: req.body.text, created_at: new Date() });
        note.save(function (err) {
            if (err) {
                console.log('something went wrong in add note');
                let errors = [];
                for (var key in err.errors){
                    errors.push(err.errors[key].message);
                }
                res.json({message: "Error", error: errors});
            } else {
                res.json({message:  "Success!", note: note});
            }
        });
    },
}