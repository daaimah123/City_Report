const Pool = require('pg').Pool
const pool = new Pool({
  user: 'codetl',
  host: 'localhost',
  database: 'city_report',
  password: 'password',
  port: 5432,
})

//in production FIXME: env not established
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/city_report',
//     // Use SSL but only in production
//     ssl: process.env.NODE_ENV === 'production'
//   });


const getContacts = 
async (req, res) =>{
    const client = await pool.connect();
    const contactsTable = await client.query('SELECT * FROM contractors_report.contacts');
    res.json(contactsTable.rows);
    client.release();
    console.log('hello') ///testing for true connection
}
// (request, response) => {
//     pool.query('SELECT * FROM contacts ORDER BY "Permit Number" ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }


const getContactById = async (req, res) =>{
    const client = await pool.connect();
    const contactsTable = await client.query('SELECT * FROM events WHERE id = $1', [req.params.id]); 
    res.json(contactsTable.rows[0]); 
    client.release();
}
  




module.exports = {
    getContacts, getContactById
}