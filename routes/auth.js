const express = require('express')

const router = express.Router()


//import middleware

const {authCheck, adminCheck} = require('../middlewares/auth')


//import controller
const {createOrUpdateUser, currentUser} = require('../controllers/auth')

//we need to verify that the token provided by the frontend is valid, we'll do so by validating with
//firebase admin, so we'll set a middleware that will be set between the post endpoint and the post controller,
//by doing so we can be sure that no action will be taken without being sure that we got a valid token

//endpoints
router.post('/create-or-update-user', authCheck, createOrUpdateUser)
router.post('/current-user', authCheck, currentUser)
router.post('/current-admin', authCheck, adminCheck, currentUser)

module.exports = router
