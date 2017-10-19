var notes = require('../controllers/notes.js');

module.exports = function (app) {

    app.get('/notes', (req,res,next)=>{
        console.log("get route working");
        notes.index(req, res);
    })

    app.post('/notes', (req, res, next)=>{
        console.log("create route working and posted to db");
        console.log(req.body);
        notes.new(req, res);
    });

    app.get('*', function(req, res){
        res.sendFile('index.html', { root: './../public/dist' });
    });
};