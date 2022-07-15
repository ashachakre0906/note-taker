const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');
const { json } = require('express');

// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
  res.json(notes);
});

// POST Route for a new notes
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };
    notes.push(newNote);
    writeToFile('../db/db.json',JSON.stringify(notes))
    res.json(notes);
    // readAndAppend(newNote, '../db/db.json');
  //   res.json(`note added successfully 🚀`);
  // } else {
  //   res.error('Error in adding note');

  }
});
// DELETE Route for a specific notes
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;//passing the data from the FE
  const notesKeep = notes.filter((note) => note.id !== noteId);
  writeToFile('../db/db.json',JSON.stringify(notesKeep))
  res.json(notes);  //keep the notes filter
  // readFromFile('../db/db.json')
  //   // .then((data) => JSON.parse(data))
  //   .then((data) => console.log(data))
  //   .then((json) => {
  //     // Make a new array of all notes except the one with the ID provided in the URL
  //     // Save that array to the filesystem
  //     writeToFile('./db/db.json', result);

  //     // Respond to the DELETE request
  //     res.json(`Item ${noteId} has been deleted 🗑️`);
  //   });
});

module.exports = router;
