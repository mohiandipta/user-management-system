const express = require('express')
const router = express.Router()
const services = require('../services/render')


/**
 * @description Root Route
 * @method GET/
 */
router.get('/', services.homeRoutes)


/**
 * @description add user Route
 * @method GET/add-user
 */
router.get('/add-user', services.add_user)


/**
 * @description update user Route
 * @method GET/update-user
 */
router.get('/update-user', services.update_user)

module.exports = router