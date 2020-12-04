const orm = require('../config/orm.js')

const user = {
  selectAll(cb) {
    orm.getAll('users', users => cb(users))
  },
  insterOne(user, cb) {
    orm.create('users', user, () => cb())
  },
  updateOne(changes, id, cb) {
    orm.update('users', changes, { id }, () => cb())
  }
}

module.exports = burger
