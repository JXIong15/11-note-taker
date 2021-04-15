// Dependencies
const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../../notes.html')));



// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));