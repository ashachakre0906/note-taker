const router = require ('express').Router();
const path = require('path');

//GET * should return teh index.html file
router.get('*',(req, res) => {
res.sendFile(path.join(__dirname,"../public/index.html"))

})
//GET /notes should return the notes.html file
router.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
    
    })
   
module.exports = router;


