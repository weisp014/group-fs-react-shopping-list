const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO all routes

//POST route
router.post('/', (req, res) => {
  const newItem = req.body;
  console.log('req.body:', newItem);
  
  const sqlText = `INSERT INTO "shoppingCart" ("name", "quantity", "unit") VALUES ($1, $2, $3)`;

  pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});
    
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
