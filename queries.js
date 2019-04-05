// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'codetl',
//   host: 'localhost',
//   database: 'city_report',
//   password: 'password',
//   port: 5432,
// })

//in production FIXME: env not established
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/city_report',
//     // Use SSL but only in production
//     ssl: process.env.NODE_ENV === 'production'
//   });





/* =============================================  Routes  ==============================================
 these functions dont necessarily have to be on separate file, can be in get requests directly in index.js  
 ======================================================================================================= */
//get by id
// const getContactById = 

//get all
// const getContacts = async (req, res) =>{
//     const client = await pool.connect(); //make request with client inside the pool
//     const contactsTable = await client.query('SELECT * FROM contractors_report.contacts LIMIT 10'); //query that runs to pull pg data
//     res.json(contactsTable.rows); //the queried data as response in json form
//     client.release();//release client back to pool
//     console.log('hello') ///testing for true connection
// }
//this way below wasnt working for me, so tried above, research more
// (request, response) => {
//     pool.query('SELECT * FROM contacts ORDER BY "Permit Number" ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }
  




// module.exports = {getContacts
//     // , getContactById
// }