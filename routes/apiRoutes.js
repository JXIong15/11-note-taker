const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    let rawData = fs.readFileSync('./db/db.json');
    let parseData = JSON.parse(rawData);
    return res.json(parseData);
})

module.exports = router;