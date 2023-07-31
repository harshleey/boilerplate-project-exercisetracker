const express = require('express')
const router = express.Router()
const logController = require('../controllers/logController')

router.get('/:_id/logs', logController.getLogs)

module.exports = router