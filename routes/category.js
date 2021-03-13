const express = require('express')

const router = express.Router()


//import middleware

const {authCheck, adminCheck} = require('../middlewares/auth')


//import controller
const {create, read, update, remove, list, getSubs} = require('../controllers/category')

//we need to verify that the token provided by the frontend is valid, we'll do so by validating with
//firebase admin, so we'll set a middleware that will be set between the post endpoint and the post controller,
//by doing so we can be sure that no action will be taken without being sure that we got a valid token

//endpoints
router.post('/category', authCheck, adminCheck, create)
router.get('/categories', list)
router.get('/category/:slug', read)
router.put('/category/:slug', authCheck, adminCheck, update)
router.delete('/category/:slug', authCheck, adminCheck, remove)
router.get('/category/subs/:_id', getSubs)

module.exports = router
