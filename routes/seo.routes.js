const { generateSeo } = require('../controllers/seo.controller')
const express = require('express')
const router = express.Router()

router.route('/generate-seo').post(generateSeo)

module.exports = router
