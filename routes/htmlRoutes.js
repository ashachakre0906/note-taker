const router = require ('express').Router();
const path = require('path');

//GET route for retrieving the notes
router.get('*',(req, res) => {
res.sendFile(path.join(__dirname,"../public/index.html"))

})
//GET route for retrieving the notes
router.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
    
    })
   
module.exports = router;


