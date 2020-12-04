const router = require('express').Router()
const user = require('../models/user.js')


router.get('/burgers', (req, res) =>
  user.selectAll(burgers =>
    res.render('index', { burgers })))

router.post('/burgers', (req, res) =>
  user.insertOne(req.body, () =>
    res.sendStatus(200)))

router.put('/burgers/:id', (req, res) =>
  user.updateOne(req.body, req.params.id, () =>
    res.sendStatus(200)))

module.exports = router
