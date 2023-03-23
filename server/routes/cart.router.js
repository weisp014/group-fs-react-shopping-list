const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO all routes

// GET
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "shoppingCart";`;
    pool.query(sqlText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (err) => {
            console.log(`Error making DB query ${sqlText}`, error);
            res.sendStatus(500);
        });
});








module.exports = router;
