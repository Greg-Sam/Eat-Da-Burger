const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://root:MySQL1!@localhost/users_db')

module.exports = connection
