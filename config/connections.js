const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://root:MySQL1!@localhost/burgers_db')

module.exports = connection
