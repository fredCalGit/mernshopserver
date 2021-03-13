const express = require('express')

const router = express.Router()


//import middleware

const {authCheck, adminCheck} = require('../middlewares/auth')


//import controller
const {create, read, update, remove, list} = require('../controllers/sub')

//we need to verify that the token provided by the frontend is valid, we'll do so by validating with
//firebase admin, so we'll set a middleware that will be set between the post endpoint and the post controller,
//by doing so we can be sure that no action will be taken without being sure that we got a valid token

//endpoints
router.post('/sub', authCheck, adminCheck, create)
router.get('/subs', list)
router.get('/sub/:slug', read)
router.put('/sub/:slug', authCheck, adminCheck, update)
router.delete('/sub/:slug', authCheck, adminCheck, remove)

module.exports = router
