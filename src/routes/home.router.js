const express = require('express')
const homeController = require('../controllers/homeController')
const homesController = require('../controllers/homeController')
const homeRouter = express.Router()

homeRouter.get('/:slug', homeController.show)
homeRouter.get('/', homeController.index)


module.exports = homeRouter