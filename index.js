/* ========================= EXPRESS APP =================================
 ========================================================================= */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//test route
app.get('/', (request, response) => { 
response.json({ info: "Test Message Testing" })
})

/* ===========================  POOL  =================================
======================================================================= */
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'codetl',
  host: 'localhost',
  database: 'city_report',
  password: 'password',
  port: 5432,
})
/* =====================  ROUTES / QUERIES  ===========================
======================================================================= */

app.get('/contacts', async (req, res) =>{
    const client = await pool.connect();
    const contactsTable = await client.query('SELECT * FROM events WHERE id = $1', [req.params.id]); 
    res.json(contactsTable.rows[0]);
    client.release();
})
// app.get('/contacts/:id', db.getContactsById)
// app.get('/contacts', async (req, res) =>{
//     const client = await pool.connect();
//     const contactsTable = await client.query('SELECT * FROM contacts');
//     res.json(contactsTable.rows);

//     client.release();
// })

//listening message
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


