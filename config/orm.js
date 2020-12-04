const connection = require('./connections.js')

const orm = {
  selectAll(table, cb) {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  insterOne(table, data, cb) {
    connection.query(`INSERT INTO ${table} SET ?`, data, err => {
      if (err) { console.log(err) }
      cb()
    })
  },
  updateOne(table, data, query, cb) {
    connection.query(`UPDATE ${table} SET ? WHERE ?`, [data, query], err => {
      if (err) { console.log(err) }
      cb()
    })
  }
}

module.exports = orm