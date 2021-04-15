// Dependencies
const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 8080;

var idNum = 1;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));
app.get('/api/notes', (req, res) => {
    fs.readFileSync(path.join(__dirname, '../../../db/db.json'));
    console.log("fs");
});

// Create New Note - takes in JSON input
app.post('/api/notes', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newNote = req.body;
  
    newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);
  
    db.json.push(newNote);
    res.json(newNote);
  });

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));