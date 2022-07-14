const notes = require ('express').Router();
const path = require('path');

//GET route for retrieving the notes
notes.get('/',(req, res) => {
res.sendFile(path.join(__dirname,"../public/index.html"))

})
//GET route for retrieving the notes
notes.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
    
    })
    
module.exports = notes;


