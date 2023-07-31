const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController') 
const homeController = require('../controllers/homeController')

router.get('/', homeController.getIndex)
router.post('/api/users', userController.postSignup)
router.get('/api/users', userController.getUsers)


module.exports = router