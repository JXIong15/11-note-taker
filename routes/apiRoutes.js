const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");
const notes = require('../db/db.json');

// reads the notes from the json file
router.get('/notes', (req, res) => res.json(notes));

// posts the new note to the json file and to the left column
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
     
    try {
        fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    }
    catch {
        return "db.json failed."
    }

    res.json(notes);
});

module.exports = router;