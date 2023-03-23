const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
const cartRouter = require('./routes/cart.routerjs')
app.use('/cart', cartRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});