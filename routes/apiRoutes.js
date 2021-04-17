const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");
let notes = require('../db/db.json');

// reads the notes from the json file
router.get('/notes', (req, res) => res.json(notes));

// posts the new note to the json file and to the left column
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    writeToFile(notes);
    res.json(notes);
    // res.redirect("/notes");
});

// deletes notes
router.delete('/notes/:id', (req, res) => {
    const delID = req.params.id;
    var newNotes = notes.filter(note => note.id !== delID);
    writeToFile(newNotes);
    notes = newNotes;
    res.json(notes);
});

// rewrites the db.json file with the new data
function writeToFile(data) {
    try {
        return fs.writeFileSync("./db/db.json", JSON.stringify(data));
    }
    catch {
        return "db.json failed."
    }
}

module.exports = router;