const orm = require('../config/orm.js')

const burger = {
  selectAll(cb) {
    orm.selectAll('users', users => cb(users))
  },
  insterOne(user, cb) {
    orm.insterOne('users', user, () => cb())
  },
  updateOne(changes, id, cb) {
    orm.updateOne('users', changes, { id }, () => cb())
  }
}

module.exports = burger
