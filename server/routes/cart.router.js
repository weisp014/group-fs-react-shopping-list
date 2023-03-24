const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO all routes

//PUT route
router.put("/:id", (req,res) => {
    console.log('inside put request', req.params.id)
    const groceryId = req.params.id;

    const sqlText =` UPDATE "shoppingCart" SET "purchased" = 'true' WHERE id=$1	`;

    pool.query(sqlText, [groceryId])
    .then(result => {
        res.sendStatus(200)
        console.log('inside put below then')
    })
    .catch(err => {
        res.sendStatus(500)
    })
})


//POST route
router.post("/", (req, res) => {
  const newItem = req.body;
  console.log("req.body:", newItem);

  const sqlText = `INSERT INTO "shoppingCart" ("name", "quantity", "unit") VALUES ($1, $2, $3)`;

  pool
    .query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// GET
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM "shoppingCart";`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Error making DB query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  let idToDelete = req.params.id;
  const sqlText = `DELETE FROM "shoppingCart" WHERE id=$1;`

  pool.query(sqlText, [idToDelete]) 
    .then(result => {
      console.log('Deleted item from the database with id:', idToDelete);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
  const sqlText = `DELETE FROM "shoppingCart";`

  pool.query(sqlText) 
    .then(result => {
      console.log('Deleted all items from the database');
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
})

module.exports = router;
