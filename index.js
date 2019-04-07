/* ========================= EXPRESS APP =================================
 ========================================================================= */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//pg promise module, pool is doing this already no need to use
// var pgp = require('pg-promise')(/*options*/)
// var db = pgp('postgres://username:password@host:port/database')



// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })





app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



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
//test route
app.get('/', (request, response) => { 
    response.json({ info: "Test Message Testing" })
    })

app.get('/contacts',async (req, res) =>{
    const client = await pool.connect(); //make request with client inside the pool
    const contactsTable = await client.query('SELECT * FROM contractors_report.contacts LIMIT 10'); //query that runs to pull pg data
    res.json(contactsTable.rows); //the queried data as response in json form
    console.log('hello') //testing for connection
    client.release();//release client back to pool
    })
// app.get('/contacts/:id',  async (req, res) =>{
//     const client = await pool.connect();
//     const contactsTable = await client.query('SELECT * FROM contractors_report.contacts WHERE id = $1', [req.params.id]); 
//     res.json(contactsTable.rows[0]);
//     client.release();
// })
// app.get('/contacts', async (req, res) =>{
//     const client = await pool.connect();
//     const contactsTable = await client.query('SELECT * FROM contractors_report.contacts LIMIT 10');
//     res.json(contactsTable.rows);

//     client.release();
// })

//listening message
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


