const express = require('express')

const router = express.Router()

//import middleware

const {authCheck, adminCheck} = require('../middlewares/auth')

//controllers
const {upload, remove} = require('../controllers/cloudinary')


//endpoints
router.post('/uploadimages', authCheck, adminCheck, upload)
router.post('/removeimage', authCheck, adminCheck, remove)

module.exports = router