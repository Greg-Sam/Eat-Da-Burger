const router = require('express').Router()

router.get('/', (req, res) => res.redirect('/api/users'))
router.use('/api', require('./burgerController.js'))

module.exports = router
