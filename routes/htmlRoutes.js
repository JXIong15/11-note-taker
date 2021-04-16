const router = require('express').Router();
const path = require('path');


// for the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// navigates to the main page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;