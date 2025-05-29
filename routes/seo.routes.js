const { generateSeo } = require('../controllers/seo.controller')
const express = require('express')
const router = express.Router()

router.route('/generate').post(generateSeo)

module.exports = router
